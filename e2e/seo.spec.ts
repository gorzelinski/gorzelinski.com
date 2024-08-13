import { test } from './fixtures'

test.describe('SEO tests', () => {
  test('checks the meta tags on the home page', async ({
    page,
    settingsPage
  }) => {
    const dictionary = await settingsPage.getDictionary('en')

    await page.goto(settingsPage.link.home)

    await settingsPage.checkSeoTags({
      title: dictionary.page.home.metadata.title,
      description: dictionary.page.home.metadata.description,
      slug: settingsPage.link.home,
      type: 'website'
    })
  })

  test('checks the meta tags on the portfolio page', async ({
    page,
    settingsPage
  }) => {
    const dictionary = await settingsPage.getDictionary('en')

    await page.goto(settingsPage.link.portfolio)

    await settingsPage.checkSeoTags({
      title: dictionary.page.portfolio.metadata.title,
      description: dictionary.page.portfolio.metadata.description,
      slug: settingsPage.link.portfolio,
      type: 'website'
    })
  })

  test('checks the meta tags on the portfolio project page', async ({
    page,
    settingsPage
  }) => {
    const slug = `${settingsPage.link.portfolio}an-lam/`

    await page.goto(slug)

    await settingsPage.checkSeoTags({
      title: 'An-lam - business website',
      description:
        'An-lam is a small polish local business repairing boats and yachts. Its niche character makes it interesting also for distant clients.',
      slug,
      type: 'article'
    })
  })

  test('checks the meta tags on the about page', async ({
    page,
    settingsPage
  }) => {
    const dictionary = await settingsPage.getDictionary('en')

    await page.goto(settingsPage.link.about)

    await settingsPage.checkSeoTags({
      title: dictionary.page.about.metadata.title,
      description: dictionary.page.about.metadata.description,
      slug: settingsPage.link.about,
      type: 'website'
    })
  })

  test('checks the meta tags on the blog page', async ({
    page,
    settingsPage
  }) => {
    const dictionary = await settingsPage.getDictionary('en')

    await page.goto(settingsPage.link.blog)

    await settingsPage.checkSeoTags({
      title: dictionary.page.blog.metadata.title,
      description: dictionary.page.blog.metadata.description,
      slug: settingsPage.link.blog,
      type: 'website'
    })
  })

  test('checks the meta tags on the blog post page', async ({
    page,
    settingsPage
  }) => {
    const slug = `${settingsPage.link.blog}hello-world/`

    await page.goto(slug)

    await settingsPage.checkSeoTags({
      title: 'Hello... world?',
      description: 'What am I actually doing?',
      slug,
      type: 'article'
    })
  })

  test('checks the meta tags on the uses page', async ({
    page,
    settingsPage
  }) => {
    const dictionary = await settingsPage.getDictionary('en')

    await page.goto(settingsPage.link.uses)

    await settingsPage.checkSeoTags({
      title: dictionary.page.uses.metadata.title,
      description: dictionary.page.uses.metadata.description,
      slug: settingsPage.link.uses,
      type: 'website'
    })
  })

  test('checks the meta tags on the subscription confirmed page', async ({
    page,
    settingsPage
  }) => {
    const dictionary = await settingsPage.getDictionary('en')

    await page.goto(settingsPage.link.subscriptionConfirmed)

    await settingsPage.checkSeoTags({
      title: dictionary.page.subscriptionConfirmed.metadata.title,
      description: dictionary.page.subscriptionConfirmed.metadata.description,
      slug: settingsPage.link.subscriptionConfirmed,
      type: 'website'
    })
  })
})
