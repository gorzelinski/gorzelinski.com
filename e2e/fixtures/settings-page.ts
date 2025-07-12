import { expect, type Locator, type Page } from '@playwright/test'
import { Theme } from '@/types'
import { Dictionary } from '@/scripts'
import {
  createLocaleWithTerritory,
  getAbsoluteURL,
  getLocaleDisplayName,
  hslToRgb
} from '@/lib'
import { CONTENTTYPE, HANDLES, LINKS, SOCIALS } from '@/constants'
import { i18n, Locale } from '@/i18n.config'
import { token } from '@/styled-system/tokens'
import { getFormURL } from '@/lib/newsletter'
import en from '@/dictionaries/en.json'
import pl from '@/dictionaries/pl.json'

type ThemeSettings = {
  background: string
  text: string
}

export class SettingsPage {
  public readonly locales: typeof i18n.locales
  public readonly link: typeof LINKS & typeof SOCIALS
  public readonly handle: typeof HANDLES
  public readonly example: {
    email: string
    url: string
  }
  private readonly dictionary: {
    [key in Locale]: Dictionary
  }
  private readonly theme: {
    [key in Theme]: ThemeSettings
  }
  private readonly contentType: string

  public heading: Locator
  private themeButtons: {
    [key in Locale]: Locator
  }
  private languageButtons: {
    [key in Locale]: Locator
  }
  private sunny: Locator
  private moon: Locator
  private background: Locator

  constructor(public readonly page: Page) {
    this.locales = i18n.locales
    this.link = {
      ...LINKS,
      ...SOCIALS
    }
    this.handle = {
      ...HANDLES
    }
    this.example = {
      email: 'example@email.com',
      url: 'https://example.com'
    }
    this.dictionary = {
      en,
      pl
    }
    this.theme = {
      light: {
        background: hslToRgb(token('colors.light.gray.900')),
        text: hslToRgb(token('colors.light.gray.50'))
      },
      dark: {
        background: hslToRgb(token('colors.dark.gray.900')),
        text: hslToRgb(token('colors.dark.gray.50'))
      }
    }
    this.contentType = CONTENTTYPE

    this.themeButtons = {
      en: this.page.getByRole('button', {
        name: this.dictionary.en.component.themeSwitch.ariaLabel
      }),
      pl: this.page.getByRole('button', {
        name: this.dictionary.pl.component.themeSwitch.ariaLabel
      })
    }
    this.languageButtons = {
      en: this.page.getByRole('link', {
        name: getLocaleDisplayName('en')
      }),
      pl: this.page.getByRole('link', {
        name: getLocaleDisplayName('pl')
      })
    }
    this.sunny = this.page.getByTestId('sunny')
    this.moon = this.page.getByTestId('moon')
    this.heading = this.page.getByRole('heading', { level: 1 })
    this.background = this.page.getByTestId('background')
  }

  async switchTheme(lang: Locale = 'en') {
    await this.themeButtons[lang].click()
  }

  async switchLanguage(lang: Locale) {
    await this.languageButtons[lang].click()
  }

  async getDictionary(lang: Locale) {
    return this.dictionary[lang]
  }

  async getAbsoluteURL(slug: string, lang: Locale = 'en') {
    return getAbsoluteURL(slug, lang)
  }

  async getFormURL(lang: Locale) {
    return getFormURL(lang)
  }

  async getTemplateTitle(title: string, lang: Locale) {
    return `${title} | ${this.dictionary[lang].layout.root.metadata.title}`
  }

  async checkTheme(theme: Theme, lang: Locale = 'en') {
    await expect(this.themeButtons[lang]).toBeVisible()
    await expect(theme === 'light' ? this.sunny : this.moon).toBeVisible()
    await expect(this.heading).toHaveCSS(
      'color',
      theme === 'light' ? this.theme.light.text : this.theme.dark.text
    )
    await expect(this.background).toHaveCSS(
      'background-color',
      theme === 'light'
        ? this.theme.light.background
        : this.theme.dark.background
    )
  }

  async checkI18nTags(lang: Locale) {
    const html = this.page.locator('html')
    const alternateLinks = this.page.locator('link[rel="alternate"]')
    const ogLocale = this.page.locator('meta[property="og:locale"]')
    const ogLocaleAlternates = this.page.locator(
      'meta[property="og:locale:alternate"]'
    )
    const filteredLocales = this.locales.filter((locale) => locale !== lang)

    await expect(html).toHaveAttribute('lang', lang)
    await expect(alternateLinks).toHaveCount(this.locales.length)
    for (const locale of this.locales) {
      const alternateLink = alternateLinks.and(
        this.page.locator(`[hreflang="${locale}"]`)
      )

      await expect(alternateLink).toHaveCount(1)
    }
    await expect(ogLocale).toHaveAttribute(
      'content',
      createLocaleWithTerritory(lang)
    )
    await expect(ogLocaleAlternates).toHaveCount(this.locales.length - 1)
    for (const locale of filteredLocales) {
      const ogLocaleAlternate = ogLocaleAlternates.and(
        this.page.locator(`[content="${createLocaleWithTerritory(locale)}"]`)
      )

      await expect(ogLocaleAlternate).toHaveCount(1)
    }
  }

  async checkSeoTags({
    title,
    description,
    slug,
    type
  }: {
    title: string
    description: string
    slug: string
    type: 'website' | 'article'
  }) {
    const url = await this.getAbsoluteURL(slug)

    const applicationName = this.page.locator('meta[name="application-name"]')
    const author = this.page.locator('meta[name="author"]')
    const generator = this.page.locator('meta[name="generator"]')
    const creator = this.page.locator('meta[name="creator"]')
    const publisher = this.page.locator('meta[name="publisher"]')
    const canonical = this.page.locator('link[rel="canonical"]')
    const titleTag = await this.page.title()
    const descriptionTag = this.page.locator('meta[name="description"]')

    const ogSiteName = this.page.locator('meta[property="og:site_name"]')
    const ogTitle = this.page.locator('meta[property="og:title"]')
    const ogDescription = this.page.locator('meta[property="og:description"]')
    const ogType = this.page.locator('meta[property="og:type"]')
    const ogImage = this.page.locator('meta[property="og:image"]')
    const ogImageAlt = this.page.locator('meta[property="og:image:alt"]')
    const ogImageWidth = this.page.locator('meta[property="og:image:width"]')
    const ogImageHeight = this.page.locator('meta[property="og:image:height"]')
    const ogImageType = this.page.locator('meta[property="og:image:type"]')

    const twitterSite = this.page.locator('meta[name="twitter:site"]')
    const twitterCreator = this.page.locator('meta[name="twitter:creator"]')
    const twitterTitle = this.page.locator('meta[name="twitter:title"]')
    const twitterDescription = this.page.locator(
      'meta[name="twitter:description"]'
    )
    const twitterCard = this.page.locator('meta[name="twitter:card"]')
    const twitterImage = this.page.locator('meta[name="twitter:image"]')
    const twitterImageAlt = this.page.locator('meta[name="twitter:image:alt"]')
    const twitterImageWidth = this.page.locator(
      'meta[name="twitter:image:width"]'
    )
    const twitterImageHeight = this.page.locator(
      'meta[name="twitter:image:height"]'
    )
    const twitterImageType = this.page.locator(
      'meta[name="twitter:image:type"]'
    )

    await expect(applicationName).toHaveAttribute('content', 'gorzelinski.com')
    await expect(author).toHaveAttribute(
      'content',
      this.dictionary.en.layout.root.metadata.author
    )
    await expect(generator).toHaveAttribute(
      'content',
      this.dictionary.en.layout.root.metadata.generator
    )
    await expect(creator).toHaveAttribute(
      'content',
      this.dictionary.en.layout.root.metadata.author
    )
    await expect(publisher).toHaveAttribute(
      'content',
      this.dictionary.en.layout.root.metadata.author
    )
    await expect(canonical).toHaveAttribute('href', url)
    await expect(titleTag).toBe(
      slug === this.link.home ? title : await this.getTemplateTitle(title, 'en')
    )
    await expect(descriptionTag).toHaveAttribute('content', description)

    await expect(ogTitle).toHaveAttribute('content', title)
    await expect(ogDescription).toHaveAttribute('content', description)
    await expect(ogSiteName).toHaveAttribute(
      'content',
      this.dictionary.en.layout.root.metadata.title
    )
    await expect(ogType).toHaveAttribute('content', type)
    await expect(ogImage).toHaveAttribute('content')
    await expect(ogImageAlt).toHaveAttribute('content')
    await expect(ogImageWidth).toHaveAttribute('content', '1200')
    await expect(ogImageHeight).toHaveAttribute('content', '630')
    await expect(ogImageType).toHaveAttribute('content', this.contentType)

    await expect(twitterSite).toHaveAttribute(
      'content',
      `@${this.handle.twitter}`
    )
    await expect(twitterCreator).toHaveAttribute(
      'content',
      `@${this.handle.twitter}`
    )
    await expect(twitterTitle).toHaveAttribute('content', title)
    await expect(twitterDescription).toHaveAttribute('content', description)
    await expect(twitterCard).toHaveAttribute('content', 'summary_large_image')
    await expect(twitterImage).toHaveAttribute('content')
    await expect(twitterImageAlt).toHaveAttribute('content')
    await expect(twitterImageWidth).toHaveAttribute('content', '1200')
    await expect(twitterImageHeight).toHaveAttribute('content', '600')
    await expect(twitterImageType).toHaveAttribute('content', this.contentType)
  }

  async checkJSONLD({
    type,
    lang,
    author,
    title,
    description,
    date
  }: {
    type: 'WebPage' | 'BlogPosting'
    lang: Locale
    author: string
    title: string
    description: string
    date?: string
  }) {
    const jsonLdTags = this.page.locator('script[type="application/ld+json"]')
    const jsonLdWebsite = await jsonLdTags.first().textContent()
    const jsonLdWebPage = await jsonLdTags.last().textContent()
    const schemaUrl = 'https://schema.org'
    const person = 'Person'

    await expect(jsonLdTags).toHaveCount(2)

    await expect(jsonLdWebsite).toContain(schemaUrl)
    await expect(jsonLdWebsite).toContain('WebSite')
    await expect(jsonLdWebsite).toContain(lang)
    await expect(jsonLdWebsite).toContain(await this.getAbsoluteURL('/'))
    await expect(jsonLdWebsite).toContain(person)
    await expect(jsonLdWebsite).toContain(author)
    await expect(jsonLdWebsite).toContain(
      this.dictionary[lang].layout.root.metadata.name
    )

    await expect(jsonLdWebPage).toContain(schemaUrl)
    await expect(jsonLdWebPage).toContain(type)
    await expect(jsonLdWebPage).toContain(lang)
    await expect(jsonLdWebPage).toContain(person)
    await expect(jsonLdWebPage).toContain(author)
    await expect(jsonLdWebPage).toContain(title)
    await expect(jsonLdWebPage).toContain(description)

    if (type === 'BlogPosting') {
      await expect(jsonLdWebPage).toContain(date)
    }
  }
}
