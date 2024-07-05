import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { COOKIES } from './constants'
import { i18n, I18nConfig } from './i18n.config'

function getLocale(request: NextRequest, i18nConfig: I18nConfig): string {
  const { locales, defaultLocale } = i18nConfig

  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  let response
  let nextLocale
  const { locales, defaultLocale } = i18n
  const pathname = request.nextUrl.pathname
  const excludedPaths = [
    '/api',
    '/_next',
    '/public',
    '/fonts',
    '/images',
    '/videos',
    '/opengraph-image',
    '/favicon.ico'
  ]

  if (excludedPaths.some((path) => pathname.includes(path))) {
    return
  }

  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathLocale) {
    const isDefaultLocale = pathLocale === defaultLocale
    if (isDefaultLocale) {
      let pathWithoutLocale = pathname.slice(`/${pathLocale}`.length) || '/'
      if (request.nextUrl.search) pathWithoutLocale += request.nextUrl.search

      response = NextResponse.redirect(new URL(pathWithoutLocale, request.url))
    }

    nextLocale = pathLocale
  } else {
    const isFirstVisit = !request.cookies.has(COOKIES.locale)

    const locale = isFirstVisit ? getLocale(request, i18n) : defaultLocale

    let newPath = `/${locale}${pathname}`
    if (request.nextUrl.search) newPath += request.nextUrl.search

    response =
      locale === defaultLocale
        ? NextResponse.rewrite(new URL(newPath, request.url))
        : NextResponse.redirect(new URL(newPath, request.url))
    nextLocale = locale
  }

  if (!response) response = NextResponse.next()

  if (nextLocale) response.cookies.set(COOKIES.locale, nextLocale)

  return response
}
