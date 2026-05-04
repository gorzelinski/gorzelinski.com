import { test as base } from '@playwright/test'
import { SettingsPage } from './settings-page'

type Page = {
  settingsPage: SettingsPage
  isMobile: boolean
}

export const test = base.extend<Page>({
  settingsPage: async ({ page }, use) => {
    await use(new SettingsPage(page))
  },
  isMobile: async ({ page: _page }, use, testInfo) => {
    await use(/Mobile/i.test(testInfo.project.name))
  }
})

export { expect } from '@playwright/test'
