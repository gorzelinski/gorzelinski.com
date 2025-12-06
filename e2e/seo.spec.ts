import { test, type SettingsPage } from './fixtures'
import type { Dictionary } from '@/scripts'

type MetaTagsConfig = {
  name: string
  getUrl: (settingsPage: SettingsPage) => string
  getTitle: (dictionary: Dictionary) => string
  getDescription: (dictionary: Dictionary) => string
  type: 'website' | 'article'
}

type JsonLdConfig = {
  name: string
  getUrl: (settingsPage: SettingsPage) => string
  type: 'WebPage' | 'BlogPosting'
  getTitle: (dictionary: Dictionary) => string
  getDescription: (dictionary: Dictionary) => string
  date?: string
}

test.describe('SEO tests', () => {
  test.describe('Meta tags', () => {
    const metaTagsPages: MetaTagsConfig[] = [
      {
        name: 'home page',
        getUrl: (settingsPage) => settingsPage.link.home,
        getTitle: (dictionary) => dictionary.page.home.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.home.metadata.description,
        type: 'website'
      },
      {
        name: 'portfolio page',
        getUrl: (settingsPage) => settingsPage.link.portfolio,
        getTitle: (dictionary) => dictionary.page.portfolio.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.portfolio.metadata.description,
        type: 'website'
      },
      {
        name: 'portfolio project page',
        getUrl: (settingsPage) => `${settingsPage.link.portfolio}an-lam/`,
        getTitle: () => 'An-lam - business website',
        getDescription: () =>
          'An-lam is a small polish local business repairing boats and yachts. Its niche character makes it interesting also for distant clients.',
        type: 'article'
      },
      {
        name: 'about page',
        getUrl: (settingsPage) => settingsPage.link.about,
        getTitle: (dictionary) => dictionary.page.about.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.about.metadata.description,
        type: 'website'
      },
      {
        name: 'blog page',
        getUrl: (settingsPage) => settingsPage.link.blog,
        getTitle: (dictionary) => dictionary.page.blog.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.blog.metadata.description,
        type: 'website'
      },
      {
        name: 'blog post page',
        getUrl: (settingsPage) => `${settingsPage.link.blog}hello-world/`,
        getTitle: () => 'Hello... world?',
        getDescription: () => 'What am I actually doing?',
        type: 'article'
      },
      {
        name: 'uses page',
        getUrl: (settingsPage) => settingsPage.link.uses,
        getTitle: (dictionary) => dictionary.page.uses.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.uses.metadata.description,
        type: 'website'
      },
      {
        name: 'subscription confirmed page',
        getUrl: (settingsPage) => settingsPage.link.subscriptionConfirmed,
        getTitle: (dictionary) =>
          dictionary.page.subscriptionConfirmed.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.subscriptionConfirmed.metadata.description,
        type: 'website'
      }
    ]

    for (const pageConfig of metaTagsPages) {
      test(`checks the meta tags on the ${pageConfig.name}`, async ({
        page,
        settingsPage
      }) => {
        const dictionary = await settingsPage.getDictionary('en')
        const url = pageConfig.getUrl(settingsPage)

        await page.goto(url)

        await settingsPage.checkSeoTags({
          title: pageConfig.getTitle(dictionary),
          description: pageConfig.getDescription(dictionary),
          slug: url,
          type: pageConfig.type
        })
      })
    }
  })

  test.describe('JSON-LD', () => {
    const jsonLdPages: JsonLdConfig[] = [
      {
        name: 'home page',
        getUrl: (settingsPage) => settingsPage.link.home,
        type: 'WebPage',
        getTitle: (dictionary) => dictionary.page.home.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.home.metadata.description
      },
      {
        name: 'portfolio page',
        getUrl: (settingsPage) => settingsPage.link.portfolio,
        type: 'WebPage',
        getTitle: (dictionary) => dictionary.page.portfolio.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.portfolio.metadata.description
      },
      {
        name: 'portfolio project page',
        getUrl: (settingsPage) => `${settingsPage.link.portfolio}an-lam/`,
        type: 'BlogPosting',
        getTitle: () => 'An-lam - business website',
        getDescription: () =>
          'An-lam is a small polish local business repairing boats and yachts. Its niche character makes it interesting also for distant clients.',
        date: '2021-05-19T14:00:00.000Z'
      },
      {
        name: 'about page',
        getUrl: (settingsPage) => settingsPage.link.about,
        type: 'WebPage',
        getTitle: (dictionary) => dictionary.page.about.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.about.metadata.description
      },
      {
        name: 'blog page',
        getUrl: (settingsPage) => settingsPage.link.blog,
        type: 'WebPage',
        getTitle: (dictionary) => dictionary.page.blog.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.blog.metadata.description
      },
      {
        name: 'blog post page',
        getUrl: (settingsPage) => `${settingsPage.link.blog}hello-world/`,
        type: 'BlogPosting',
        getTitle: () => 'Hello... world?',
        getDescription: () => 'What am I actually doing?',
        date: '2022-07-07T14:00:00.000Z'
      },
      {
        name: 'uses page',
        getUrl: (settingsPage) => settingsPage.link.uses,
        type: 'WebPage',
        getTitle: (dictionary) => dictionary.page.uses.metadata.title,
        getDescription: (dictionary) =>
          dictionary.page.uses.metadata.description
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

    for (const pageConfig of jsonLdPages) {
      test(`checks the JSON-LD scripts on the ${pageConfig.name}`, async ({
        page,
        settingsPage
      }) => {
        const dictionary = await settingsPage.getDictionary('en')

        await page.goto(pageConfig.getUrl(settingsPage))

        await settingsPage.checkJSONLD({
          type: pageConfig.type,
          lang: 'en',
          author: dictionary.layout.root.metadata.author,
          title: pageConfig.getTitle(dictionary),
          description: pageConfig.getDescription(dictionary),
          date: pageConfig.date
        })
      })
    }
  })
})
