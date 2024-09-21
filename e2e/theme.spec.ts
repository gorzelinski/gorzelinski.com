import { test } from './fixtures'

test.describe('Theme tests', () => {
  test('checks theme on the initial load (OS without preference)', async ({
    page,
    settingsPage
  }) => {
    await page.goto(settingsPage.link.home)

    await settingsPage.checkTheme('light')
  })

  test('checks theme on the initial load (OS dark)', async ({
    page,
    settingsPage
  }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto(settingsPage.link.home)

    await settingsPage.checkTheme('dark')
  })

  test('checks theme on the initial load (OS light)', async ({
    page,
    settingsPage
  }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto(settingsPage.link.home)

    await settingsPage.checkTheme('light')
  })

  // test('checks the OS theme change', async ({ page, settingsPage }) => {
  //   await page.emulateMedia({ colorScheme: 'light' })
  //   await page.goto(settingsPage.link.home)

  //   await settingsPage.checkTheme('light')

  //   await page.emulateMedia({ colorScheme: 'dark' })

  //   await settingsPage.checkTheme('dark')
  // })

  test('checks theme switching', async ({ page, settingsPage }) => {
    await page.goto(settingsPage.link.home)

    await settingsPage.checkTheme('light')

    await settingsPage.switchTheme()

    await settingsPage.checkTheme('dark')

    await page.reload()

    await settingsPage.checkTheme('dark')
  })

  test('checks if the theme persist after switching the language ', async ({
    page,
    settingsPage
  }) => {
    await page.goto(settingsPage.link.home)

    await settingsPage.checkTheme('light')

    await settingsPage.switchLanguage('pl')

    await settingsPage.checkTheme('light', 'pl')
  })
})
