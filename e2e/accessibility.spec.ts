import type { Page, ConsoleMessage } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { test, expect, type SettingsPage } from './fixtures'

type PageConfig = {
  name: string
  getUrl: (settingsPage: SettingsPage) => string
  setup?: (page: Page) => void
}

test.describe('Accessibility tests', () => {
  const pages: PageConfig[] = [
    {
      name: 'home page',
      getUrl: (settingsPage) => settingsPage.link.home
    },
    {
      name: 'portfolio page',
      getUrl: (settingsPage) => settingsPage.link.portfolio
    },
    {
      name: 'portfolio project page',
      getUrl: (settingsPage) => `${settingsPage.link.portfolio}an-lam/`
    },
    {
      name: 'about page',
      getUrl: (settingsPage) => settingsPage.link.about
    },
    {
      name: 'uses page',
      getUrl: (settingsPage) => settingsPage.link.uses
    },
    {
      name: 'blog page',
      getUrl: (settingsPage) => settingsPage.link.blog
    },
    {
      name: 'blog post page',
      getUrl: (settingsPage) =>
        `${settingsPage.link.blog}object-oriented-programming-in-typescript/`
    },
    {
      name: 'subscription confirmed page',
      getUrl: (settingsPage) => settingsPage.link.subscriptionConfirmed
    },
    {
      name: 'not found page',
      getUrl: () => '/404/'
    }
  ]

  pages.forEach((pageConfig) => {
    test(`${pageConfig.name} should not have accessibility violations`, async ({
      page,
      settingsPage
    }) => {
      if (pageConfig.setup) {
        pageConfig.setup(page)
      }

      await page.goto(pageConfig.getUrl(settingsPage))

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    })
  })
})
