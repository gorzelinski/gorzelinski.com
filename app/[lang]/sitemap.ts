import { MetadataRoute } from 'next'
import { i18n } from '@/i18n.config'
import { CRAWLABLE, LINKS } from '@/constants'
import { getSlugs } from '@/scripts'
import { getAbsoluteURL } from '@/lib'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getSlugs(LINKS.blog)).map((slug) => `/blog/${slug}/`)
  const projects = (await getSlugs(LINKS.portfolio)).map(
    (slug) => `/portfolio/${slug}/`
  )
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
