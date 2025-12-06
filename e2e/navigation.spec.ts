import { expect, test, type SettingsPage } from './fixtures'
import type { Dictionary } from '@/scripts'

type NavigationLinkConfig = {
  getName: (dictionary: Dictionary) => string
  getUrl: (settingsPage: SettingsPage) => string
  useFirstLocator?: boolean
  expectActiveClass?: boolean
}

type ContactLinkConfig = {
  name: string
  getUrl: (settingsPage: SettingsPage) => string
}

test.describe('Navigation tests', () => {
  test('navigates around pages', async ({ page, settingsPage }) => {
    const { links, layout } = await settingsPage.getDictionary('en')
    const { link } = settingsPage

    await page.goto(link.home)

    const navigationLinks: NavigationLinkConfig[] = [
      {
        getName: (dictionary) => dictionary.layout.root.metadata.title,
        getUrl: (settingsPage) => settingsPage.link.home,
        expectActiveClass: false
      },
      {
        getName: (dictionary) => dictionary.links.portfolio,
        getUrl: (settingsPage) => settingsPage.link.portfolio,
        useFirstLocator: true,
        expectActiveClass: true
      },
      {
        getName: (dictionary) => dictionary.links.about,
        getUrl: (settingsPage) => settingsPage.link.about,
        useFirstLocator: true,
        expectActiveClass: true
      },
      {
        getName: (dictionary) => dictionary.links.blog,
        getUrl: (settingsPage) => settingsPage.link.blog,
        useFirstLocator: true,
        expectActiveClass: true
      },
      {
        getName: (dictionary) => dictionary.links.uses,
        getUrl: (settingsPage) => settingsPage.link.uses,
        expectActiveClass: false
      },
      {
        getName: (dictionary) => dictionary.links.newsletter,
        getUrl: (settingsPage) => settingsPage.link.newsletter,
        expectActiveClass: false
      }
    ]

    for (const linkConfig of navigationLinks) {
      const linkLocator = page.getByRole('link', {
        name: linkConfig.getName({ links, layout } as Dictionary)
      })
      const link = linkConfig.useFirstLocator
        ? linkLocator.first()
        : linkLocator

      await expect(link).toBeVisible()
      await link.click()
      await expect(page).toHaveURL(linkConfig.getUrl(settingsPage))

      if (linkConfig.expectActiveClass) {
        await expect(link).toHaveClass(/active/)
      }
    }

    const rss = page.getByRole('link', {
      name: links.rss
    })
    await expect(rss).toBeVisible()
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

    const socialLinks: ContactLinkConfig[] = [
      {
        name: 'Github',
        getUrl: (settingsPage) => settingsPage.link.github
      },
      {
        name: 'Bluesky',
        getUrl: (settingsPage) => settingsPage.link.bluesky
      },
      {
        name: 'Twitter',
        getUrl: (settingsPage) => settingsPage.link.twitter
      },
      {
        name: 'Dribbble',
        getUrl: (settingsPage) => settingsPage.link.dribbble
      },
      {
        name: 'Facebook',
        getUrl: (settingsPage) => settingsPage.link.facebook
      },
      {
        name: 'Instagram',
        getUrl: (settingsPage) => settingsPage.link.instagram
      },
      {
        name: 'Linkedin',
        getUrl: (settingsPage) => settingsPage.link.linkedin
      }
    ]

    for (const socialLink of socialLinks) {
      const linkElement = page
        .getByRole('link', {
          name: socialLink.name
        })
        .last()

      await expect(linkElement).toBeVisible()
      await expect(linkElement).toHaveAttribute('target', '_blank')
      await expect(linkElement).toHaveAttribute(
        'href',
        socialLink.getUrl(settingsPage)
      )
    }

    const coffee = page.getByRole('link', { name: links.coffee })
    await expect(coffee).toBeVisible()
    await expect(coffee).toHaveAttribute('target', '_blank')
    await expect(coffee).toHaveAttribute('href', link.buyMeACoffee)

    const github = page
      .getByRole('link', {
        name: 'Github'
      })
      .last()
    const githubPagePromise = page.waitForEvent('popup')
    await github.click()
    const githubPage = await githubPagePromise
    await expect(githubPage).toHaveURL(link.github)
  })
})
