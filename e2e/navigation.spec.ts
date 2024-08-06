import { expect, test } from './fixtures/page'

test.describe('Navigation tests', () => {
  test('navigates around pages', async ({ page, settingsPage }) => {
    const { links, layout } = await settingsPage.getDictionary('en')
    const { link } = settingsPage

    await page.goto(link.home)

    const home = page.getByRole('link', {
      name: layout.root.metadata.title
    })
    await expect(home).toBeVisible()
    await home.click()
    await expect(page).toHaveURL(link.home)

    const portfolio = page
      .getByRole('link', {
        name: links.portfolio
      })
      .first()
    await expect(portfolio).toBeVisible()
    await portfolio.click()
    await expect(page).toHaveURL(link.portfolio)
    await expect(portfolio).toHaveClass(/active/)

    const about = page
      .getByRole('link', {
        name: links.about
      })
      .first()
    await expect(about).toBeVisible()
    await about.click()
    await expect(page).toHaveURL(link.about)
    await expect(about).toHaveClass(/active/)

    const blog = page
      .getByRole('link', {
        name: links.blog
      })
      .first()
    await expect(blog).toBeVisible()
    await blog.click()
    await expect(page).toHaveURL(link.blog)
    await expect(blog).toHaveClass(/active/)

    const uses = page.getByRole('link', {
      name: links.uses
    })
    await expect(uses).toBeVisible()
    await uses.click()
    await expect(page).toHaveURL(link.uses)

    const newsletter = page.getByRole('link', {
      name: links.newsletter
    })
    await expect(newsletter).toBeVisible()
    await newsletter.click()
    await expect(page).toHaveURL(link.newsletter)

    const rss = page.getByRole('link', {
      name: links.rss
    })
    await expect(rss).toBeVisible()
    await rss.click()
    await expect(page).toHaveURL(link.rss)
    await expect(page.getByRole('heading', { level: 1 })).not.toBeVisible()
  })

  test('navigates around contact methods', async ({ page, settingsPage }) => {
    const { links } = await settingsPage.getDictionary('en')
    const { link } = settingsPage

    await page.goto(link.home)

    const contact = page.getByRole('link', {
      name: links.contact
    })
    await expect(contact).toBeVisible()
    await contact.click()
    await page.waitForURL(link.contact)

    const email = page.getByRole('link', {
      name: link.email
    })
    await expect(email).toBeVisible()
    await expect(email).toHaveAttribute('href', `mailto:${link.email}`)

    const github = page
      .getByRole('link', {
        name: 'Github'
      })
      .last()
    await expect(github).toBeVisible()
    await expect(github).toHaveAttribute('target', '_blank')
    await expect(github).toHaveAttribute('href', link.github)

    const twitter = page
      .getByRole('link', {
        name: 'Twitter'
      })
      .last()
    await expect(twitter).toBeVisible()
    await expect(twitter).toHaveAttribute('target', '_blank')
    await expect(twitter).toHaveAttribute('href', link.twitter)

    const dribbble = page
      .getByRole('link', {
        name: 'Dribbble'
      })
      .last()
    await expect(dribbble).toBeVisible()
    await expect(dribbble).toHaveAttribute('target', '_blank')
    await expect(dribbble).toHaveAttribute('href', link.dribbble)

    const facebook = page
      .getByRole('link', {
        name: 'Facebook'
      })
      .last()
    await expect(facebook).toBeVisible()
    await expect(facebook).toHaveAttribute('target', '_blank')
    await expect(facebook).toHaveAttribute('href', link.facebook)

    const instagram = page
      .getByRole('link', {
        name: 'Instagram'
      })
      .last()
    await expect(instagram).toBeVisible()
    await expect(instagram).toHaveAttribute('target', '_blank')
    await expect(instagram).toHaveAttribute('href', link.instagram)

    const linkedin = page
      .getByRole('link', {
        name: 'Linkedin'
      })
      .last()
    await expect(linkedin).toBeVisible()
    await expect(linkedin).toHaveAttribute('target', '_blank')
    await expect(linkedin).toHaveAttribute('href', link.linkedin)

    const githubPagePromise = page.waitForEvent('popup')
    await github.click()
    const githubPage = await githubPagePromise
    await expect(githubPage).toHaveURL(link.github)
  })
})
