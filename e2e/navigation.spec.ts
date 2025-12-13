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
    const dictionary = await settingsPage.getDictionary('en')
    const { link } = settingsPage

    await page.goto(link.home)

    const navigationLinks: NavigationLinkConfig[] = [
      {
        getName: ({ layout }) => layout.root.metadata.title,
        getUrl: (settingsPage) => settingsPage.link.home,
        expectActiveClass: false
      },
      {
        getName: ({ links }) => links.portfolio,
        getUrl: (settingsPage) => settingsPage.link.portfolio,
        useFirstLocator: true,
        expectActiveClass: true
      },
      {
        getName: ({ links }) => links.about,
        getUrl: (settingsPage) => settingsPage.link.about,
        useFirstLocator: true,
        expectActiveClass: true
      },
      {
        getName: ({ links }) => links.blog,
        getUrl: (settingsPage) => settingsPage.link.blog,
        useFirstLocator: true,
        expectActiveClass: true
      },
      {
        getName: ({ links }) => links.uses,
        getUrl: (settingsPage) => settingsPage.link.uses,
        expectActiveClass: false
      },
      {
        getName: ({ links }) => links.newsletter,
        getUrl: (settingsPage) => settingsPage.link.newsletter,
        expectActiveClass: false
      }
    ]

    for (const navigationLink of navigationLinks) {
      const linkLocator = page.getByRole('link', {
        name: navigationLink.getName(dictionary)
      })
      const link = navigationLink.useFirstLocator
        ? linkLocator.first()
        : linkLocator

      await expect(link).toBeVisible()
      await link.click()
      await expect(page).toHaveURL(navigationLink.getUrl(settingsPage))

      if (navigationLink.expectActiveClass) {
        await expect(link).toHaveClass(/active/)
      }
    }

    const rss = page.getByRole('link', {
      name: dictionary.links.rss
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
        getUrl: ({ link }) => link.github
      },
      {
        name: 'Bluesky',
        getUrl: ({ link }) => link.bluesky
      },
      {
        name: 'Twitter',
        getUrl: ({ link }) => link.twitter
      },
      {
        name: 'Dribbble',
        getUrl: ({ link }) => link.dribbble
      },
      {
        name: 'Facebook',
        getUrl: ({ link }) => link.facebook
      },
      {
        name: 'Instagram',
        getUrl: ({ link }) => link.instagram
      },
      {
        name: 'Linkedin',
        getUrl: ({ link }) => link.linkedin
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
