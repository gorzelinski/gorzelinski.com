import { test, expect } from './fixtures'

test.describe('Subscription tests', () => {
  test('checks the successful flow', async ({ page, settingsPage }) => {
    const { section } = await settingsPage.getDictionary('en')
    const formURL = await settingsPage.getFormURL('en')

    await page.route(formURL, (route) =>
      route.fulfill({
        status: 200,
        body: JSON.stringify({ status: 'success' })
      })
    )
    await page.goto(settingsPage.link.home)

    const input = page.getByLabel(section.newsletter.email)
    const button = page.getByRole('button', { name: section.newsletter.button })

    await expect(input).toHaveAttribute('required')
    await expect(input).toHaveAttribute('type', 'email')
    await expect(input).toHaveAttribute('autocomplete', 'off')

    await input.fill(settingsPage.example.email)
    await button.click()

    await expect(
      page.getByText(section.newsletter.success.heading)
    ).toBeVisible()
  })

  test('checks the additional security flow', async ({
    page,
    settingsPage
  }) => {
    const { section } = await settingsPage.getDictionary('en')
    const formURL = await settingsPage.getFormURL('en')

    await page.route(formURL, (route) =>
      route.fulfill({
        status: 200,
        body: JSON.stringify({
          status: 'quarantined',
          url: settingsPage.example.url
        })
      })
    )
    await page.goto(settingsPage.link.home)

    const input = page.getByPlaceholder(section.newsletter.email)
    const button = page.getByRole('button', { name: section.newsletter.button })

    await input.fill(settingsPage.example.email)
    const newPagePromise = page.waitForEvent('popup')
    await button.click()
    const examplePage = await newPagePromise

    await expect(examplePage).toHaveURL(settingsPage.example.url)
    await expect(
      page.getByText(section.newsletter.quarantined.heading)
    ).toBeVisible()
  })

  test('checks the error flow', async ({ page, settingsPage }) => {
    const { section } = await settingsPage.getDictionary('en')
    const formURL = await settingsPage.getFormURL('en')

    await page.route(formURL, (route) => route.abort('failed'))
    await page.goto(settingsPage.link.home)

    const input = page.getByPlaceholder(section.newsletter.email)
    const button = page.getByRole('button', { name: section.newsletter.button })
    const heading = page.getByText(section.newsletter.error.heading)

    await input.fill(settingsPage.example.email)
    await button.click()

    await expect(heading).toBeVisible()
    await expect(button).toHaveAttribute('disabled')

    await input.click()

    await expect(button).not.toHaveAttribute('disabled')
    await expect(heading).not.toBeVisible()
  })
})
