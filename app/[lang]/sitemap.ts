import { MetadataRoute } from 'next'
import { Locale, i18n } from '@/i18n.config'
import { CRAWLABLE, LINKS } from '@/constants'
import { getSlugs } from '@/scripts'
import { localizePath } from '@/lib'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSlugs('/blog/').map((slug) => `/blog${slug}`)
  const projects = getSlugs('/portfolio/').map((slug) => `/portfolio${slug}`)
  const slugs = [...CRAWLABLE, ...posts, ...projects]
  const getUrl = (slug: string, lang: Locale) =>
    `${LINKS.siteUrl}${localizePath(slug, lang)}`

  const sitemap: MetadataRoute.Sitemap = i18n.locales.flatMap((locale) => {
    return slugs.map((slug) => ({
      url: getUrl(slug, locale),
      alternates: {
        languages: {
          en: getUrl(slug, 'en'),
          pl: getUrl(slug, 'pl')
        }
      }
    }))
  })

  return sitemap
}
