import { LINKS } from '@/constants'
import { test, expect } from '@playwright/test'
import dictionary from '@/dictionaries/en.json'

test.describe('Theme tests', () => {
  test('checks theme on the initial load (OS dark)', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto(LINKS.home)

    await expect(page.getByTestId('moon')).toBeVisible()
  })

  test('checks theme on the initial load (OS light)', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto(LINKS.home)

    await expect(page.getByTestId('sunny')).toBeVisible()
  })

  test('checks theme on the initial load (OS without preference)', async ({
    page
  }) => {
    await page.emulateMedia({ colorScheme: 'no-preference' })
    await page.goto(LINKS.home)

    await expect(page.getByTestId('sunny')).toBeVisible()
  })

  test('checks the OS theme change ', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto(LINKS.home)

    await expect(page.getByTestId('sunny')).toBeVisible()

    await page.emulateMedia({ colorScheme: 'dark' })

    await expect(page.getByTestId('moon')).toBeVisible()
  })

  test('checks theme switching', async ({ page }) => {
    const { component } = dictionary

    await page.goto(LINKS.home)

    const button = page.getByRole('button', {
      name: component.themeSwitch.ariaLabel
    })
    const sunny = page.getByTestId('sunny')
    const moon = page.getByTestId('moon')
    const heading = page.getByRole('heading', { level: 1 })
    const background = page.getByTestId('background')

    await expect(button).toBeVisible()
    await expect(sunny).toBeVisible()
    await expect(heading).toHaveCSS('color', 'rgb(14, 15, 16)')
    await expect(background).toHaveCSS('background-color', 'rgb(250, 250, 250)')

    await button.click()

    await expect(sunny).not.toBeVisible()
    await expect(moon).toBeVisible()
    await expect(heading).toHaveCSS('color', 'rgb(244, 245, 246)')
    await expect(background).toHaveCSS('background-color', 'rgb(14, 15, 16)')

    await page.reload()

    await expect(moon).toBeVisible()
    await expect(heading).toHaveCSS('color', 'rgb(244, 245, 246)')
    await expect(background).toHaveCSS('background-color', 'rgb(14, 15, 16)')
  })
})
