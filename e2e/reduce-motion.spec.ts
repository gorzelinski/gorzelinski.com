import { expect, test } from './fixtures'

test.describe('Reduce motion tests', () => {
  test("checks the 'reduce' motion setting", async ({ page, settingsPage }) => {
    const dictionary = await settingsPage.getDictionary('en')

    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto(settingsPage.link.home)

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      dictionary.page.home.landing.typewriter.create
    )
  })

  test("checks the 'no-preference' motion setting", async ({
    page,
    settingsPage
  }) => {
    const dictionary = await settingsPage.getDictionary('en')

    await page.emulateMedia({ reducedMotion: 'no-preference' })
    await page.goto(settingsPage.link.home)

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      dictionary.page.home.landing.typewriter.design
    )
  })
})
