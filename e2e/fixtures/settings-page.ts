import { expect, type Locator, type Page } from '@playwright/test'
import { Theme } from '@/types'
import { Dictionary } from '@/scripts'
import {
  createLocaleWithTerritory,
  getLocaleDisplayName,
  hslToRgb
} from '@/lib'
import { LINKS, SOCIALS } from '@/constants'
import { i18n, Locale } from '@/i18n.config'
import { token } from '@/styled-system/tokens'
import en from '@/dictionaries/en.json'
import pl from '@/dictionaries/pl.json'

type ThemeSettings = {
  background: string
  text: string
}

export class SettingsPage {
  public readonly locales: typeof i18n.locales
  public readonly link: typeof LINKS & typeof SOCIALS
  private readonly dictionary: {
    [key in Locale]: Dictionary
  }
  private readonly theme: {
    [key in Theme]: ThemeSettings
  }

  private themeButton: Locator
  private languageButtons: {
    [key in Locale]: Locator
  }
  private sunny: Locator
  private moon: Locator
  public heading: Locator
  private background: Locator

  constructor(public readonly page: Page) {
    this.locales = i18n.locales
    this.link = {
      ...LINKS,
      ...SOCIALS
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

    this.themeButton = this.page.getByRole('button', {
      name: this.dictionary.en.component.themeSwitch.ariaLabel
    })
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

  async switchTheme() {
    await this.themeButton.click()
  }

  async switchLanguage(lang: Locale) {
    await this.languageButtons[lang].click()
  }

  async getDictionary(lang: Locale) {
    return this.dictionary[lang]
  }

  async getTemplateTitle(title: string, lang: Locale) {
    return `${title} | ${this.dictionary[lang].layout.root.metadata.title}`
  }

  async checkTheme(theme: Theme) {
    await expect(this.themeButton).toBeVisible()
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
}
