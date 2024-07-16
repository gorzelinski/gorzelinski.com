import { MetadataRoute } from 'next'
import { i18n } from '@/i18n.config'
import { CRAWLABLE, LINKS } from '@/constants'
import { getSlugs } from '@/scripts'
import { getAbsoluteURL } from '@/lib'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSlugs(LINKS.blog).map((slug) => `/blog${slug}`)
  const projects = getSlugs(LINKS.portfolio).map((slug) => `/portfolio${slug}`)
  const slugs = [...CRAWLABLE, ...posts, ...projects]

  const sitemap: MetadataRoute.Sitemap = i18n.locales.flatMap((locale) => {
    return slugs.map((slug) => ({
      url: getAbsoluteURL(slug, locale),
      alternates: {
        languages: {
          en: getAbsoluteURL(slug, 'en'),
          pl: getAbsoluteURL(slug, 'pl')
        }
      }
    }))
  })

  return sitemap
}
