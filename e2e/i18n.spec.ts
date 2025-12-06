import { test, expect, type SettingsPage } from './fixtures'
import type { Dictionary } from '@/scripts'
import type { Locale } from '@/i18n.config'

type InitialLanguageConfig = {
  name: string
  locale: string
  lang: Locale
}

type PageI18nConfig = {
  name: string
  url: (settingsPage: SettingsPage) => string
  getTitle: (
    dict: Dictionary,
    settingsPage: SettingsPage,
    lang: Locale
  ) => Promise<string> | string
  getHeading: (dict: Dictionary, lang: Locale) => string
}

test.describe('I18n tests', () => {
  const initialLanguages: InitialLanguageConfig[] = [
    {
      name: 'English',
      locale: 'en-US',
      lang: 'en'
    },
    {
      name: 'Polish',
      locale: 'pl-PL',
      lang: 'pl'
    }
  ]

  for (const config of initialLanguages) {
    test.describe(`initial language (${config.name})`, () => {
      if (config.locale !== 'en-US') {
        test.use({ locale: config.locale })
      }

      test(`checks the initial language when the browser is set to ${config.name}`, async ({
        page,
        settingsPage
      }) => {
        await page.goto(settingsPage.link.home)

        await expect(page).toHaveURL(
          await settingsPage.getAbsoluteURL('/', config.lang)
        )
      })
    })
  }

  const pages: PageI18nConfig[] = [
    {
      name: 'home page',
      url: (settingsPage) => settingsPage.link.home,
      getTitle: (dict) => dict.page.home.metadata.title,
      getHeading: (dict) => dict.page.home.landing.typewriter.create
    },
    {
      name: 'portfolio page',
      url: (settingsPage) => settingsPage.link.portfolio,
      getTitle: async (dict, settingsPage, lang) =>
        settingsPage.getTemplateTitle(dict.page.portfolio.metadata.title, lang),
      getHeading: (dict, lang) =>
        lang === 'en'
          ? dict.page.portfolio.heading
          : dict.page.portfolio.metadata.title
    },
    {
      name: 'portfolio project page',
      url: (settingsPage) => `${settingsPage.link.portfolio}/an-lam/`,
      getTitle: async (_, settingsPage, lang) => {
        const title =
          lang === 'en'
            ? 'An-lam - business website'
            : 'An-lam - strona firmowa'
        return settingsPage.getTemplateTitle(title, lang)
      },
      getHeading: (_, lang) =>
        lang === 'en' ? 'An-lam - business website' : 'An-lam - strona firmowa'
    },
    {
      name: 'about page',
      url: (settingsPage) => settingsPage.link.about,
      getTitle: async (dict, settingsPage, lang) =>
        settingsPage.getTemplateTitle(dict.page.about.metadata.title, lang),
      getHeading: (dict) => dict.page.about.heading
    },
    {
      name: 'blog page',
      url: (settingsPage) => settingsPage.link.blog,
      getTitle: async (dict, settingsPage, lang) =>
        settingsPage.getTemplateTitle(dict.page.blog.metadata.title, lang),
      getHeading: (dict) => dict.page.blog.heading
    },
    {
      name: 'blog post page',
      url: (settingsPage) => `${settingsPage.link.blog}hello-world/`,
      getTitle: async (_, settingsPage, lang) =>
        settingsPage.getTemplateTitle('Hello... world?', lang),
      getHeading: () => 'Hello... world?'
    },
    {
      name: 'uses page',
      url: (settingsPage) => settingsPage.link.uses,
      getTitle: async (dict, settingsPage, lang) =>
        settingsPage.getTemplateTitle(dict.page.uses.metadata.title, lang),
      getHeading: (dict) => dict.page.uses.metadata.title
    },
    {
      name: 'subscription confirmed page',
      url: (settingsPage) => settingsPage.link.subscriptionConfirmed,
      getTitle: async (dict, settingsPage, lang) =>
        settingsPage.getTemplateTitle(
          dict.page.subscriptionConfirmed.metadata.title,
          lang
        ),
      getHeading: (dict) => dict.page.subscriptionConfirmed.heading
    }
  ]

  for (const pageConfig of pages) {
    test(`checks language switching on the ${pageConfig.name}`, async ({
      page,
      settingsPage
    }) => {
      const en = await settingsPage.getDictionary('en')
      const pl = await settingsPage.getDictionary('pl')

      if (pageConfig.name === 'home page') {
        await page.emulateMedia({ reducedMotion: 'reduce' })
      }

      await page.goto(pageConfig.url(settingsPage))

      await expect(page).not.toHaveURL(/en/g)
      await settingsPage.checkI18nTags('en')
      await expect(await page.title()).toBe(
        await pageConfig.getTitle(en, settingsPage, 'en')
      )
      await expect(settingsPage.heading).toHaveText(
        pageConfig.getHeading(en, 'en')
      )

      await settingsPage.switchLanguage('pl')

      await expect(page).toHaveURL(/pl/g)
      await settingsPage.checkI18nTags('pl')
      await expect(await page.title()).toBe(
        await pageConfig.getTitle(pl, settingsPage, 'pl')
      )
      await expect(settingsPage.heading).toHaveText(
        pageConfig.getHeading(pl, 'pl')
      )
    })
  }

  // test('checks language switching on the not found page', async ({
  //   page,
  //   settingsPage
  // }) => {
  //   const en = await settingsPage.getDictionary('en')
  //   const pl = await settingsPage.getDictionary('pl')

  //   page.on('console', (msg) => {
  //     if (msg.text().includes('404'))
  //       console.log(`Expected 404 error: ${msg.text()}`)
  //   })
  //   await page.goto('/404/')

  //   await expect(page).not.toHaveURL(/en/g)
  //   await expect(await page.title()).toBe(
  //     await settingsPage.getTemplateTitle(en.page.notFound.metadata.title, 'en')
  //   )
  //   await expect(settingsPage.heading).toHaveText(en.page.notFound.heading)

  //   await settingsPage.switchLanguage('pl')

  //   await expect(page).toHaveURL(/pl/g)
  //   await expect(await page.title()).toBe(
  //     await settingsPage.getTemplateTitle(pl.page.notFound.metadata.title, 'pl')
  //   )
  //   await expect(settingsPage.heading).toHaveText(pl.page.notFound.heading)
  // })
})
