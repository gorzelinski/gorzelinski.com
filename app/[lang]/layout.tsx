import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next'
import { WebSite, WithContext } from 'schema-dts'
import { PageProps, Theme } from '@/types'
import { COOKIES, metadataBase } from '@/constants'
import { Locale, i18n } from '@/i18n.config'
import { getDictionary } from '@/scripts'
import { getAbsoluteURL, getMetaImage } from '@/lib'
import { montserrat, lora, firaCode } from '@/theme/fonts'
import { Background, Footer, Main, Navbar } from '@/design-system'
import { openGraph, twitter } from '../shared-metadata'
import './globals.css'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { layout, page } = await getDictionary(lang)
  const metaImageParams = {
    theme: getCookie(COOKIES.theme, { cookies }) as Theme,
    title: page.home.metadata.title,
    subtitle: layout.root.metadata.title,
    alt: page.home.metadata.image.alt
  }

  return {
    title: {
      template: `%s | ${layout.root.metadata.title}`,
      default: layout.root.metadata.title
    },
    generator: layout.root.metadata.generator,
    applicationName: 'gorzelinski.com',
    authors: {
      name: layout.root.metadata.title,
      url: getAbsoluteURL('/', lang)
    },
    creator: layout.root.metadata.title,
    publisher: layout.root.metadata.title,
    metadataBase,
    openGraph: {
      ...(await openGraph(lang)),
      images: getMetaImage('og', lang, metaImageParams)
    },
    twitter: {
      ...twitter(),
      images: getMetaImage('twitter', lang, metaImageParams)
    }
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const { lang } = params
  const theme = getCookie(COOKIES.theme, { cookies })
  const dictionary = await getDictionary(lang)
  const jsonLd: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    inLanguage: lang,
    url: getAbsoluteURL('/', lang),
    name: dictionary.layout.root.metadata.name,
    author: {
      '@type': 'Person',
      name: dictionary.layout.root.metadata.author
    }
  }

  return (
    <html
      suppressHydrationWarning
      className={`${montserrat.variable} ${lora.variable} ${firaCode.variable}`}
      lang={lang}
      data-color-mode={theme}
    >
      <body>
        <script
          id="set-initial-theme"
          dangerouslySetInnerHTML={{
            __html: `
            try {
              const isSavedTheme = document.cookie.includes('light') || document.cookie.includes('dark')

              function getOsTheme() {
                const isOsLight = window.matchMedia(
                  '(prefers-color-scheme: light)'
                ).matches

                if (isOsLight) return 'light'
                else return 'dark'
              }

              if (!isSavedTheme) {
                const osTheme = getOsTheme()
                document.documentElement.setAttribute('data-color-mode', osTheme)
              }
            } catch (_) {}
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Background data-testid="background">
          <Navbar lang={lang} dictionary={dictionary} />
          <Main>{children}</Main>
          <Footer lang={lang} dictionary={dictionary} />
        </Background>
      </body>
    </html>
  )
}
