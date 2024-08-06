import { test as base } from '@playwright/test'
import { SettingsPage } from './settings-page'

type Page = {
  settingsPage: SettingsPage
}

export const test = base.extend<Page>({
  settingsPage: async ({ page }, use) => {
    await use(new SettingsPage(page))
  }
})

export { expect } from '@playwright/test'
