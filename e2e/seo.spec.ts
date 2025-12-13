import { test, type SettingsPage } from './fixtures'
import type { Dictionary } from '@/scripts'

type MetaTagsPageConfig = {
  name: string
  getUrl: (settingsPage: SettingsPage) => string
  getTitle: (dictionary: Dictionary) => string
  getDescription: (dictionary: Dictionary) => string
  type: 'website' | 'article'
}

type JsonLdPageConfig = {
  name: string
  getUrl: (settingsPage: SettingsPage) => string
  type: 'WebPage' | 'BlogPosting'
  getTitle: (dictionary: Dictionary) => string
  getDescription: (dictionary: Dictionary) => string
  date?: string
}

test.describe('SEO tests', () => {
  test.describe('Meta tags', () => {
    const metaTagsPages: MetaTagsPageConfig[] = [
      {
        name: 'home page',
        getUrl: ({ link }) => link.home,
        getTitle: ({ page }) => page.home.metadata.title,
        getDescription: ({ page }) => page.home.metadata.description,
        type: 'website'
      },
      {
        name: 'portfolio page',
        getUrl: ({ link }) => link.portfolio,
        getTitle: ({ page }) => page.portfolio.metadata.title,
        getDescription: ({ page }) => page.portfolio.metadata.description,
        type: 'website'
      },
      {
        name: 'portfolio project page',
        getUrl: ({ link }) => `${link.portfolio}an-lam/`,
        getTitle: () => 'An-lam - business website',
        getDescription: () =>
          'An-lam is a small polish local business repairing boats and yachts. Its niche character makes it interesting also for distant clients.',
        type: 'article'
      },
      {
        name: 'about page',
        getUrl: ({ link }) => link.about,
        getTitle: ({ page }) => page.about.metadata.title,
        getDescription: ({ page }) => page.about.metadata.description,
        type: 'website'
      },
      {
        name: 'blog page',
        getUrl: ({ link }) => link.blog,
        getTitle: ({ page }) => page.blog.metadata.title,
        getDescription: ({ page }) => page.blog.metadata.description,
        type: 'website'
      },
      {
        name: 'blog post page',
        getUrl: ({ link }) => `${link.blog}hello-world/`,
        getTitle: () => 'Hello... world?',
        getDescription: () => 'What am I actually doing?',
        type: 'article'
      },
      {
        name: 'uses page',
        getUrl: ({ link }) => link.uses,
        getTitle: ({ page }) => page.uses.metadata.title,
        getDescription: ({ page }) => page.uses.metadata.description,
        type: 'website'
      },
      {
        name: 'subscription confirmed page',
        getUrl: ({ link }) => link.subscriptionConfirmed,
        getTitle: ({ page }) => page.subscriptionConfirmed.metadata.title,
        getDescription: ({ page }) =>
          page.subscriptionConfirmed.metadata.description,
        type: 'website'
      }
    ]

    metaTagsPages.forEach((metaTagsPage) => {
      test(`checks the meta tags on the ${metaTagsPage.name}`, async ({
        page,
        settingsPage
      }) => {
        const dictionary = await settingsPage.getDictionary('en')
        const url = metaTagsPage.getUrl(settingsPage)

        await page.goto(url)

        await settingsPage.checkSeoTags({
          title: metaTagsPage.getTitle(dictionary),
          description: metaTagsPage.getDescription(dictionary),
          slug: url,
          type: metaTagsPage.type
        })
      })
    })
  })

  test.describe('JSON-LD', () => {
    const jsonLdPages: JsonLdPageConfig[] = [
      {
        name: 'home page',
        getUrl: ({ link }) => link.home,
        type: 'WebPage',
        getTitle: ({ page }) => page.home.metadata.title,
        getDescription: ({ page }) => page.home.metadata.description
      },
      {
        name: 'portfolio page',
        getUrl: ({ link }) => link.portfolio,
        type: 'WebPage',
        getTitle: ({ page }) => page.portfolio.metadata.title,
        getDescription: ({ page }) => page.portfolio.metadata.description
      },
      {
        name: 'portfolio project page',
        getUrl: ({ link }) => `${link.portfolio}an-lam/`,
        type: 'BlogPosting',
        getTitle: () => 'An-lam - business website',
        getDescription: () =>
          'An-lam is a small polish local business repairing boats and yachts. Its niche character makes it interesting also for distant clients.',
        date: '2021-05-19T14:00:00.000Z'
      },
      {
        name: 'about page',
        getUrl: ({ link }) => link.about,
        type: 'WebPage',
        getTitle: ({ page }) => page.about.metadata.title,
        getDescription: ({ page }) => page.about.metadata.description
      },
      {
        name: 'blog page',
        getUrl: ({ link }) => link.blog,
        type: 'WebPage',
        getTitle: ({ page }) => page.blog.metadata.title,
        getDescription: ({ page }) => page.blog.metadata.description
      },
      {
        name: 'blog post page',
        getUrl: ({ link }) => `${link.blog}hello-world/`,
        type: 'BlogPosting',
        getTitle: () => 'Hello... world?',
        getDescription: () => 'What am I actually doing?',
        date: '2022-07-07T14:00:00.000Z'
      },
      {
        name: 'uses page',
        getUrl: ({ link }) => link.uses,
        type: 'WebPage',
        getTitle: ({ page }) => page.uses.metadata.title,
        getDescription: ({ page }) => page.uses.metadata.description
      },
      {
        name: 'subscription confirmed page',
        getUrl: (settingsPage) => settingsPage.link.subscriptionConfirmed,
        type: 'WebPage',
        getTitle: (dictionary) =>
          dictionary.page.subscriptionConfirmed.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.subscriptionConfirmed.metadata.description
      }
    ]

    jsonLdPages.forEach((jsonLdPage) => {
      test(`checks the JSON-LD scripts on the ${jsonLdPage.name}`, async ({
        page,
        settingsPage
      }) => {
        const dictionary = await settingsPage.getDictionary('en')

        await page.goto(jsonLdPage.getUrl(settingsPage))

        await settingsPage.checkJSONLD({
          type: jsonLdPage.type,
          lang: 'en',
          author: dictionary.layout.root.metadata.author,
          title: jsonLdPage.getTitle(dictionary),
          description: jsonLdPage.getDescription(dictionary),
          date: jsonLdPage.date
        })
      })
    })
  })
})
