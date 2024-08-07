import { test, expect } from './fixtures/page'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility tests', () => {
  test('home page should not have accessibility violations', async ({
    page,
    settingsPage
  }) => {
    await page.goto(settingsPage.link.home)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('portfolio page should not have accessibility violations', async ({
    page,
    settingsPage
  }) => {
    await page.goto(settingsPage.link.portfolio)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('portfolio project page should not have accessibility violations', async ({
    page,
    settingsPage
  }) => {
    await page.goto(`${settingsPage.link.portfolio}an-lam/`)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('about page should not have accessibility violations', async ({
    page,
    settingsPage
  }) => {
    await page.goto(settingsPage.link.about)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('uses page should not have accessibility violations', async ({
    page,
    settingsPage
  }) => {
    await page.goto(settingsPage.link.uses)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('blog page should not have accessibility violations', async ({
    page,
    settingsPage
  }) => {
    await page.goto(settingsPage.link.blog)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('blog post page should not have accessibility violations', async ({
    page,
    settingsPage
  }) => {
    await page.goto(
      `${settingsPage.link.blog}object-oriented-programming-in-typescript/`
    )

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('subscription confirmed page should not have accessibility violations', async ({
    page,
    settingsPage
  }) => {
    await page.goto(settingsPage.link.subscriptionConfirmed)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('not found page should not have accessibility violations', async ({
    page
  }) => {
    page.on('console', (msg) => {
      if (msg.text().includes('404'))
        console.log(`Expected 404 error: ${msg.text()}`)
    })
    await page.goto('/404/')

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
