import { expect, test } from '@playwright/test'
import { LINKS } from '@/constants'
import dictionary from '@/dictionaries/en.json'

test.describe('Reduce motion tests', () => {
  test("checks the 'reduce' motion setting", async ({ page }) => {
    const {
      page: { home }
    } = dictionary

    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto(LINKS.home)

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      home.landing.typewriter.create
    )
  })

  test("checks the 'no-preference' motion setting", async ({ page }) => {
    const {
      page: { home }
    } = dictionary

    await page.emulateMedia({ reducedMotion: 'no-preference' })
    await page.goto(LINKS.home)

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      home.landing.typewriter.design
    )
  })
})
