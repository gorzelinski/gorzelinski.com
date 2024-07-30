import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { LINKS } from '@/constants'

test.describe('Accessibility tests', () => {
  test('home page should not have accessibility violations', async ({
    page
  }) => {
    await page.goto(LINKS.home)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('portfolio page should not have accessibility violations', async ({
    page
  }) => {
    await page.goto(LINKS.portfolio)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('portfolio project page should not have accessibility violations', async ({
    page
  }) => {
    await page.goto(`${LINKS.portfolio}an-lam/`)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('about page should not have accessibility violations', async ({
    page
  }) => {
    await page.goto(LINKS.about)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('uses page should not have accessibility violations', async ({
    page
  }) => {
    await page.goto(LINKS.uses)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('blog page should not have accessibility violations', async ({
    page
  }) => {
    await page.goto(LINKS.blog)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('blog post page should not have accessibility violations', async ({
    page
  }) => {
    await page.goto(`${LINKS.blog}hello-world/`)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('subscription confirmed page should not have accessibility violations', async ({
    page
  }) => {
    await page.goto(LINKS.subscriptionConfirmed)

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
