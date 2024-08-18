import { test, expect } from './fixtures'

test.describe('Blog tests', () => {
  test('checks the reading experience', async ({ page, settingsPage }) => {
    const url = `${settingsPage.link.blog}hello-world/`
    const { component, section } = await settingsPage.getDictionary('en')

    await page.goto(url)

    const progress = page.getByTestId('progress')

    const externalLink = page.getByText('flow state')
    const internalLink = page.getByText("I'm an engineer")

    const share = page.getByText('Share via')
    const twitter = page.getByRole('link', { name: 'Twitter' }).first()
    const facebook = page.getByRole('link', { name: 'Facebook' }).first()
    const linkedin = page.getByRole('link', { name: 'LinkedIn' }).first()
    const email = page.getByRole('link', { name: 'Email' })

    const prev = page.locator('a[rel="prev"]')
    const next = page.locator('a[rel="next"]')

    const newsletter = page.getByText(section.newsletter.heading)

    const related = page.getByRole('link', { name: component.post.button })

    await expect(progress).toHaveCSS('opacity', '0')

    await externalLink.scrollIntoViewIfNeeded()

    await expect(progress).toHaveCSS('opacity', '1')

    await expect(externalLink).toHaveAttribute(
      'rel',
      'nofollow noopener noreferrer'
    )
    await expect(externalLink).toHaveAttribute('target', '_blank')

    await expect(internalLink).not.toHaveAttribute('rel')
    await expect(internalLink).not.toHaveAttribute('target')

    await expect(share).toBeVisible()
    await expect(twitter).toBeVisible()
    await expect(twitter).toHaveAttribute('target', '_blank')
    await expect(facebook).toBeVisible()
    await expect(facebook).toHaveAttribute('target', '_blank')
    await expect(linkedin).toBeVisible()
    await expect(linkedin).toHaveAttribute('target', '_blank')
    await expect(email).toBeVisible()
    await expect(email).toHaveAttribute('target', '_blank')

    await expect(next).toBeVisible()
    await expect(newsletter).toBeVisible()
    await expect(await related.count()).toBeGreaterThan(0)

    await next.scrollIntoViewIfNeeded()
    await expect(progress).toHaveCSS('opacity', '0')
    await next.click()

    await expect(prev).toBeVisible()
    await expect(next).toBeVisible()
    await expect(await related.count()).toBeGreaterThan(0)
  })
})
