import { test, expect, type SettingsPage } from './fixtures'
import type { Dictionary } from '@/scripts'
import type { Locale } from '@/i18n.config'

type InitialLanguageConfig = {
  name: string
  locale: string
  lang: Locale
}

type I18nPageConfig = {
  name: string
  url: (settingsPage: SettingsPage) => string
  getTitle: (
    dictionary: Dictionary,
    settingsPage: SettingsPage,
    lang: Locale
  ) => Promise<string> | string
  getHeading: (dictionary: Dictionary, lang: Locale) => string
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

  initialLanguages.forEach((initialLanguage) => {
    test.describe(`initial language (${initialLanguage.name})`, () => {
      test.use({ locale: initialLanguage.locale })

      test(`checks the initial language when the browser is set to ${initialLanguage.name}`, async ({
        page,
        settingsPage
      }) => {
        await page.goto(settingsPage.link.home)

        await expect(page).toHaveURL(
          await settingsPage.getAbsoluteURL('/', initialLanguage.lang)
        )
      })
    })
  })

  const i18nPages: I18nPageConfig[] = [
    {
      name: 'home page',
      url: ({ link }) => link.home,
      getTitle: ({ page }) => page.home.metadata.title,
      getHeading: ({ page }) => page.home.landing.typewriter.create
    },
    {
      name: 'portfolio page',
      url: ({ link }) => link.portfolio,
      getTitle: async ({ page }, settingsPage, lang) =>
        settingsPage.getTemplateTitle(page.portfolio.metadata.title, lang),
      getHeading: ({ page }, lang) =>
        lang === 'en' ? page.portfolio.heading : page.portfolio.metadata.title
    },
    {
      name: 'portfolio project page',
      url: ({ link }) => `${link.portfolio}an-lam/`,
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
      url: ({ link }) => link.about,
      getTitle: async ({ page }, settingsPage, lang) =>
        settingsPage.getTemplateTitle(page.about.metadata.title, lang),
      getHeading: ({ page }) => page.about.heading
    },
    {
      name: 'blog page',
      url: ({ link }) => link.blog,
      getTitle: async ({ page }, settingsPage, lang) =>
        settingsPage.getTemplateTitle(page.blog.metadata.title, lang),
      getHeading: ({ page }) => page.blog.heading
    },
    {
      name: 'blog post page',
      url: ({ link }) => `${link.blog}hello-world/`,
      getTitle: async (_, settingsPage, lang) =>
        settingsPage.getTemplateTitle('Hello... world?', lang),
      getHeading: () => 'Hello... world?'
    },
    {
      name: 'uses page',
      url: ({ link }) => link.uses,
      getTitle: async ({ page }, settingsPage, lang) =>
        settingsPage.getTemplateTitle(page.uses.metadata.title, lang),
      getHeading: ({ page }) => page.uses.metadata.title
    },
    {
      name: 'subscription confirmed page',
      url: ({ link }) => link.subscriptionConfirmed,
      getTitle: async ({ page }, settingsPage, lang) =>
        settingsPage.getTemplateTitle(
          page.subscriptionConfirmed.metadata.title,
          lang
        ),
      getHeading: ({ page }) => page.subscriptionConfirmed.heading
    }
  ]

  i18nPages.forEach((i18nPage) => {
    test(`checks language switching on the ${i18nPage.name}`, async ({
      page,
      settingsPage
    }) => {
      const en = await settingsPage.getDictionary('en')
      const pl = await settingsPage.getDictionary('pl')

      if (i18nPage.name === 'home page') {
        await page.emulateMedia({ reducedMotion: 'reduce' })
      }

      await page.goto(i18nPage.url(settingsPage))

      await expect(page).not.toHaveURL(/en/g)
      await settingsPage.checkI18nTags('en')
      await expect(await page.title()).toBe(
        await i18nPage.getTitle(en, settingsPage, 'en')
      )
      await expect(settingsPage.heading).toHaveText(
        i18nPage.getHeading(en, 'en')
      )

      await settingsPage.switchLanguage('pl')

      await expect(page).toHaveURL(/pl/g)
      await settingsPage.checkI18nTags('pl')
      await expect(await page.title()).toBe(
        await i18nPage.getTitle(pl, settingsPage, 'pl')
      )
      await expect(settingsPage.heading).toHaveText(
        i18nPage.getHeading(pl, 'pl')
      )
    })
  })
})
