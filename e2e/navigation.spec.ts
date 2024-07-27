import { expect, test } from '@playwright/test'
import { LINKS, SOCIALS } from '@/constants'
import dictionary from '@/dictionaries/en.json'

test.describe('Navigation tests', () => {
  test('navigates around pages', async ({ page }) => {
    const { links, layout } = dictionary

    await page.goto(LINKS.home)

    const home = page.getByRole('link', {
      name: layout.root.metadata.title
    })
    await expect(home).toBeVisible()
    await home.click()
    await expect(page).toHaveURL(LINKS.home)

    const portfolio = page
      .getByRole('link', {
        name: links.portfolio
      })
      .first()
    await expect(portfolio).toBeVisible()
    await portfolio.click()
    await expect(page).toHaveURL(LINKS.portfolio)
    await expect(portfolio).toHaveClass(/active/)

    const about = page
      .getByRole('link', {
        name: links.about
      })
      .first()
    await expect(about).toBeVisible()
    await about.click()
    await expect(page).toHaveURL(LINKS.about)
    await expect(about).toHaveClass(/active/)

    const blog = page
      .getByRole('link', {
        name: links.blog
      })
      .first()
    await expect(blog).toBeVisible()
    await blog.click()
    await expect(page).toHaveURL(LINKS.blog)
    await expect(blog).toHaveClass(/active/)

    const uses = page.getByRole('link', {
      name: links.uses
    })
    await expect(uses).toBeVisible()
    await uses.click()
    await expect(page).toHaveURL(LINKS.uses)

    const newsletter = page.getByRole('link', {
      name: links.newsletter
    })
    await expect(newsletter).toBeVisible()
    await newsletter.click()
    await expect(page).toHaveURL(LINKS.newsletter)

    const rss = page.getByRole('link', {
      name: links.rss
    })
    await expect(rss).toBeVisible()
    await rss.click()
    await expect(page).toHaveURL(LINKS.rss)
    await expect(page.getByRole('heading', { level: 1 })).not.toBeVisible()
  })

  test('navigates around contact methods', async ({ page }) => {
    const { links } = dictionary

    await page.goto(LINKS.home)

    const contact = page.getByRole('link', {
      name: links.contact
    })
    await expect(contact).toBeVisible()
    await contact.click()
    await page.waitForURL(LINKS.contact)

    const email = page.getByRole('link', {
      name: LINKS.email
    })
    await expect(email).toBeVisible()
    await expect(email).toHaveAttribute('href', `mailto:${LINKS.email}`)

    const github = page
      .getByRole('link', {
        name: 'Github'
      })
      .last()
    await expect(github).toBeVisible()
    await expect(github).toHaveAttribute('target', '_blank')
    await expect(github).toHaveAttribute('href', SOCIALS.github)

    const twitter = page
      .getByRole('link', {
        name: 'Twitter'
      })
      .last()
    await expect(twitter).toBeVisible()
    await expect(twitter).toHaveAttribute('target', '_blank')
    await expect(twitter).toHaveAttribute('href', SOCIALS.twitter)

    const dribbble = page
      .getByRole('link', {
        name: 'Dribbble'
      })
      .last()
    await expect(dribbble).toBeVisible()
    await expect(dribbble).toHaveAttribute('target', '_blank')
    await expect(dribbble).toHaveAttribute('href', SOCIALS.dribbble)

    const facebook = page
      .getByRole('link', {
        name: 'Facebook'
      })
      .last()
    await expect(facebook).toBeVisible()
    await expect(facebook).toHaveAttribute('target', '_blank')
    await expect(facebook).toHaveAttribute('href', SOCIALS.facebook)

    const instagram = page
      .getByRole('link', {
        name: 'Instagram'
      })
      .last()
    await expect(instagram).toBeVisible()
    await expect(instagram).toHaveAttribute('target', '_blank')
    await expect(instagram).toHaveAttribute('href', SOCIALS.instagram)

    const linkedin = page
      .getByRole('link', {
        name: 'Linkedin'
      })
      .last()
    await expect(linkedin).toBeVisible()
    await expect(linkedin).toHaveAttribute('target', '_blank')
    await expect(linkedin).toHaveAttribute('href', SOCIALS.linkedin)

    const githubPagePromise = page.waitForEvent('popup')
    await github.click()
    const githubPage = await githubPagePromise
    await expect(githubPage).toHaveURL(SOCIALS.github)
  })
})
