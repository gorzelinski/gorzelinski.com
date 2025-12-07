import AxeBuilder from '@axe-core/playwright'
import { test, expect, type SettingsPage } from './fixtures'

type A11yPageConfig = {
  name: string
  getUrl: (settingsPage: SettingsPage) => string
}

test.describe('Accessibility tests', () => {
  const a11yPages: A11yPageConfig[] = [
    {
      name: 'home',
      getUrl: (settingsPage) => settingsPage.link.home
    },
    {
      name: 'portfolio',
      getUrl: (settingsPage) => settingsPage.link.portfolio
    },
    {
      name: 'portfolio project',
      getUrl: (settingsPage) => `${settingsPage.link.portfolio}an-lam/`
    },
    {
      name: 'about',
      getUrl: (settingsPage) => settingsPage.link.about
    },
    {
      name: 'uses',
      getUrl: (settingsPage) => settingsPage.link.uses
    },
    {
      name: 'blog',
      getUrl: (settingsPage) => settingsPage.link.blog
    },
    {
      name: 'blog post',
      getUrl: (settingsPage) =>
        `${settingsPage.link.blog}object-oriented-programming-in-typescript/`
    },
    {
      name: 'subscription confirmed',
      getUrl: (settingsPage) => settingsPage.link.subscriptionConfirmed
    },
    {
      name: 'not found',
      getUrl: () => '/404/'
    }
  ]

  a11yPages.forEach((a11yPage) => {
    test(`${a11yPage.name} page should not have accessibility violations`, async ({
      page,
      settingsPage
    }) => {
      await page.goto(a11yPage.getUrl(settingsPage))

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    })
  })
})
