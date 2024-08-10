import { test, expect } from './fixtures/page'

test.describe('I18n tests', () => {
  test('checks language switching on the home page', async ({
    page,
    settingsPage
  }) => {
    const en = await settingsPage.getDictionary('en')
    const pl = await settingsPage.getDictionary('pl')

    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto(settingsPage.link.home)

    await expect(page).not.toHaveURL(/en/g)
    await settingsPage.checkI18nTags('en')
    await expect(await page.title()).toBe(en.page.home.metadata.title)
    await expect(settingsPage.heading).toHaveText(
      en.page.home.landing.typewriter.create
    )

    await settingsPage.switchLanguage('pl')

    await expect(page).toHaveURL(/pl/g)
    await settingsPage.checkI18nTags('pl')
    await expect(await page.title()).toBe(pl.page.home.metadata.title)
    await expect(settingsPage.heading).toHaveText(
      pl.page.home.landing.typewriter.create
    )
  })

  test('checks language switching on the portfolio page', async ({
    page,
    settingsPage
  }) => {
    const en = await settingsPage.getDictionary('en')
    const pl = await settingsPage.getDictionary('pl')

    await page.goto(settingsPage.link.portfolio)

    await expect(page).not.toHaveURL(/en/g)
    await settingsPage.checkI18nTags('en')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle(
        en.page.portfolio.metadata.title,
        'en'
      )
    )
    await expect(settingsPage.heading).toHaveText(en.page.portfolio.heading)

    await settingsPage.switchLanguage('pl')

    await expect(page).toHaveURL(/pl/g)
    await settingsPage.checkI18nTags('pl')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle(
        pl.page.portfolio.metadata.title,
        'pl'
      )
    )
    await expect(settingsPage.heading).toHaveText(
      pl.page.portfolio.metadata.title
    )
  })

  test('checks language switching on the portfolio project page', async ({
    page,
    settingsPage
  }) => {
    await page.goto(`${settingsPage.link.portfolio}/an-lam/`)

    await expect(page).not.toHaveURL(/en/g)
    await settingsPage.checkI18nTags('en')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle('An-lam - business website', 'en')
    )
    await expect(settingsPage.heading).toHaveText('An-lam - business website')

    await settingsPage.switchLanguage('pl')

    await expect(page).toHaveURL(/pl/g)
    await settingsPage.checkI18nTags('pl')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle('An-lam - strona firmowa', 'pl')
    )
    await expect(settingsPage.heading).toHaveText('An-lam - strona firmowa')
  })

  test('checks language switching on the about page', async ({
    page,
    settingsPage
  }) => {
    const en = await settingsPage.getDictionary('en')
    const pl = await settingsPage.getDictionary('pl')

    await page.goto(settingsPage.link.about)

    await expect(page).not.toHaveURL(/en/g)
    await settingsPage.checkI18nTags('en')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle(en.page.about.metadata.title, 'en')
    )
    await expect(settingsPage.heading).toHaveText(en.page.about.heading)

    await settingsPage.switchLanguage('pl')

    await expect(page).toHaveURL(/pl/g)
    await settingsPage.checkI18nTags('pl')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle(pl.page.about.metadata.title, 'pl')
    )
    await expect(settingsPage.heading).toHaveText(pl.page.about.heading)
  })

  test('checks language switching on the blog page', async ({
    page,
    settingsPage
  }) => {
    const en = await settingsPage.getDictionary('en')
    const pl = await settingsPage.getDictionary('pl')

    await page.goto(settingsPage.link.blog)

    await expect(page).not.toHaveURL(/en/g)
    await settingsPage.checkI18nTags('en')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle(en.page.blog.metadata.title, 'en')
    )
    await expect(settingsPage.heading).toHaveText(en.page.blog.heading)

    await settingsPage.switchLanguage('pl')

    await expect(page).toHaveURL(/pl/g)
    await settingsPage.checkI18nTags('pl')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle(pl.page.blog.metadata.title, 'pl')
    )
    await expect(settingsPage.heading).toHaveText(pl.page.blog.heading)
  })

  test('checks language switching on the blog post page', async ({
    page,
    settingsPage
  }) => {
    await page.goto(`${settingsPage.link.blog}hello-world/`)

    await expect(page).not.toHaveURL(/en/g)
    await settingsPage.checkI18nTags('en')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle('Hello... world?', 'en')
    )
    await expect(settingsPage.heading).toHaveText('Hello... world?')

    await settingsPage.switchLanguage('pl')

    await expect(page).toHaveURL(/pl/g)
    await settingsPage.checkI18nTags('pl')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle('Hello... world?', 'pl')
    )
    await expect(settingsPage.heading).toHaveText('Hello... world?')
  })

  test('checks language switching on the uses page', async ({
    page,
    settingsPage
  }) => {
    const en = await settingsPage.getDictionary('en')
    const pl = await settingsPage.getDictionary('pl')

    await page.goto(settingsPage.link.uses)

    await expect(page).not.toHaveURL(/en/g)
    await settingsPage.checkI18nTags('en')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle(en.page.uses.metadata.title, 'en')
    )
    await expect(settingsPage.heading).toHaveText(en.page.uses.metadata.title)

    await settingsPage.switchLanguage('pl')

    await expect(page).toHaveURL(/pl/g)
    await settingsPage.checkI18nTags('pl')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle(pl.page.uses.metadata.title, 'pl')
    )
    await expect(settingsPage.heading).toHaveText(pl.page.uses.metadata.title)
  })

  test('checks language switching on the subscription confirmed page', async ({
    page,
    settingsPage
  }) => {
    const en = await settingsPage.getDictionary('en')
    const pl = await settingsPage.getDictionary('pl')

    await page.goto(settingsPage.link.subscriptionConfirmed)

    await expect(page).not.toHaveURL(/en/g)
    await settingsPage.checkI18nTags('en')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle(
        en.page.subscriptionConfirmed.metadata.title,
        'en'
      )
    )
    await expect(settingsPage.heading).toHaveText(
      en.page.subscriptionConfirmed.heading
    )

    await settingsPage.switchLanguage('pl')

    await expect(page).toHaveURL(/pl/g)
    await settingsPage.checkI18nTags('pl')
    await expect(await page.title()).toBe(
      await settingsPage.getTemplateTitle(
        pl.page.subscriptionConfirmed.metadata.title,
        'pl'
      )
    )
    await expect(settingsPage.heading).toHaveText(
      pl.page.subscriptionConfirmed.heading
    )
  })

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
