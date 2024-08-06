import { expect, type Locator, type Page } from '@playwright/test'
import { Theme } from '@/types'
import { Dictionary } from '@/scripts'
import { hslToRgb } from '@/lib'
import { token } from '@/styled-system/tokens'
import dictionary from '@/dictionaries/en.json'

type ThemeSettings = {
  background: string
  text: string
}

export class SettingsPage {
  private readonly dictionary: Dictionary
  private readonly theme: {
    light: ThemeSettings
    dark: ThemeSettings
  }
  private themeButton: Locator
  private sunny: Locator
  private moon: Locator
  private heading: Locator
  private background: Locator

  constructor(public readonly page: Page) {
    this.dictionary = dictionary
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
      name: this.dictionary.component.themeSwitch.ariaLabel
    })
    this.sunny = this.page.getByTestId('sunny')
    this.moon = this.page.getByTestId('moon')
    this.heading = this.page.getByRole('heading', { level: 1 })
    this.background = this.page.getByTestId('background')
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

  async switchTheme() {
    await this.themeButton.click()
  }
}
