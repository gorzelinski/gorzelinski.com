import { test, expect } from './fixtures'

test.describe('Reading tests', () => {
  test('checks the search experience of the blog page', async ({ page, settingsPage }) => {
    const { component } = await settingsPage.getDictionary('en')

    await page.goto(settingsPage.link.blog)

    const searchBar = page.getByRole('searchbox', { name: component.searchBar.placeholder })
    await searchBar.fill('hello... world?')

    await expect(page.url()).not.toContain('hello')

    await page.waitForURL(`${settingsPage.link.blog}?query=hello...+world%3F`)

    await expect(page.url()).toContain('hello')

    const posts = page.getByRole('article')

    await expect(posts).toHaveCount(1)

    await searchBar.clear()

    await page.waitForURL(settingsPage.link.blog)

    await expect(page.url()).not.toContain('?query=hello')

    await expect(await posts.count()).toBeGreaterThan(5)
  })

  test('checks the reading experience of a blog post', async ({
    page,
    settingsPage,
    isMobile
  }) => {
    const url = `${settingsPage.link.blog}hello-world/`
    const { component, section } = await settingsPage.getDictionary('en')

    await page.goto(url)

    const progress = page.getByTestId('progress')

    const toc = page.getByRole('navigation', { name: 'Table of contents' })
    const tocLink = page.getByRole('link', { name: 'Computer Science' })

    const externalLink = page.getByText('flow state')
    const internalLink = page.getByText("I'm an engineer")

    const share = page.getByText('Share via')
    const bluesky = page.getByRole('link', { name: 'Bluesky' }).first()
    const twitter = page.getByRole('link', { name: 'Twitter' }).first()
    const facebook = page.getByRole('link', { name: 'Facebook' }).first()
    const linkedin = page.getByRole('link', { name: 'LinkedIn' }).first()
    const email = page.getByRole('link', { name: 'Email' })

    const prev = page.locator('a[rel="prev"]')
    const next = page.locator('a[rel="next"]')

    const coffee = page
      .getByRole('link', { name: section.supportMe.button })
      .first()

    const newsletter = page.getByText(section.newsletter.heading)

    const related = page.getByRole('link', { name: component.post.button })

    await expect(progress).toHaveCSS('opacity', '0')

    await externalLink.scrollIntoViewIfNeeded()

    await expect(progress).toHaveCSS('opacity', '1')

    if (isMobile) {
      await expect(toc).not.toBeVisible()
      await expect(tocLink).not.toBeVisible()
    }

    if (!isMobile) {
      await expect(toc).toBeVisible()
      await expect(tocLink).toBeVisible()

      await tocLink.click()

      await expect(page.url()).toContain('#computer-science')
    }

    await expect(externalLink).toHaveAttribute(
      'rel',
      'nofollow noopener noreferrer'
    )
    await expect(externalLink).toHaveAttribute('target', '_blank')

    await expect(internalLink).not.toHaveAttribute('rel')
    await expect(internalLink).not.toHaveAttribute('target')

    await expect(share).toBeVisible()
    await expect(bluesky).toBeVisible()
    await expect(bluesky).toHaveAttribute('target', '_blank')
    await expect(twitter).toBeVisible()
    await expect(twitter).toHaveAttribute('target', '_blank')
    await expect(facebook).toBeVisible()
    await expect(facebook).toHaveAttribute('target', '_blank')
    await expect(linkedin).toBeVisible()
    await expect(linkedin).toHaveAttribute('target', '_blank')
    await expect(email).toBeVisible()
    await expect(email).toHaveAttribute('target', '_blank')

    await expect(next).toBeVisible()

    await expect(coffee).toBeVisible()
    await expect(coffee).toHaveAttribute('target', '_blank')

    await expect(newsletter).toBeVisible()

    await expect(await related.count()).toBeGreaterThan(0)

    await next.scrollIntoViewIfNeeded()
    await expect(progress).toHaveCSS('opacity', '0')
    await next.click()

    await expect(prev).toBeVisible()
    await expect(next).toBeVisible()
    await expect(await related.count()).toBeGreaterThan(0)
  })

  test('checks the reading experience of a portfolio project', async ({
    page,
    settingsPage
  }) => {
    const { section } = await settingsPage.getDictionary('en')

    const url = `${settingsPage.link.portfolio}an-lam/`

    await page.goto(url)

    const externalLink = page.getByText('Atomic design')
    const internalLink = page.getByText('Jamstack')

    const twitter = page.getByRole('link', { name: 'Twitter' })
    const facebook = page.getByRole('link', { name: 'Facebook' })
    const linkedin = page.getByRole('link', { name: 'LinkedIn' })
    const email = page.getByRole('link', { name: settingsPage.link.email })

    const prev = page.locator('a[rel="prev"]')
    const next = page.locator('a[rel="next"]')

    const newsletter = page.getByText(section.newsletter.heading)

    await expect(externalLink).toHaveAttribute(
      'rel',
      'nofollow noopener noreferrer'
    )
    await expect(externalLink).toHaveAttribute('target', '_blank')

    await expect(internalLink).not.toHaveAttribute('rel')
    await expect(internalLink).not.toHaveAttribute('target')

    await expect(twitter).toBeVisible()
    await expect(twitter).toHaveAttribute('target', '_blank')
    await expect(facebook).toBeVisible()
    await expect(facebook).toHaveAttribute('target', '_blank')
    await expect(linkedin).toBeVisible()
    await expect(linkedin).toHaveAttribute('target', '_blank')
    await expect(email).toBeVisible()

    await expect(next).toBeVisible()
    await expect(newsletter).toBeVisible()

    await next.scrollIntoViewIfNeeded()
    await next.click()

    await expect(prev).toBeVisible()
  })
})
