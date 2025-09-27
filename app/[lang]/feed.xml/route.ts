import RSS from 'rss'
import { NextRequest } from 'next/server'
import { Locale } from '@/i18n.config'
import { LINKS } from '@/constants'
import { getDictionary, getMDXes } from '@/scripts'
import { getAbsoluteURL } from '@/lib'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ lang: string }> }
) {
  const params = await context.params

  const { lang } = params as { lang: Locale }

  const { layout, page } = await getDictionary(lang)
  const posts = await getMDXes<'post'>(LINKS.blog, lang)
  const projects = await getMDXes<'project'>(LINKS.portfolio, lang)
  const items = [...posts, ...projects].sort((prev, next) => {
    const prevDate = new Date(prev.frontmatter.date).getTime()
    const nextDate = new Date(next.frontmatter.date).getTime()
    return nextDate - prevDate
  })

  const feed = new RSS({
    language: lang,
    title: layout.root.metadata.name,
    description: page.blog.metadata.description,
    image_url: getAbsoluteURL(LINKS.logo),
    feed_url: getAbsoluteURL(LINKS.rss, lang),
    site_url: getAbsoluteURL(LINKS.home, lang),
    managingEditor: layout.root.metadata.author,
    webMaster: layout.root.metadata.author,
    copyright: `© ${new Date().getFullYear().toString()} ${layout.root.metadata.author}`,
    pubDate: new Date().toUTCString(),
    generator: layout.root.metadata.generator,
    ttl: 60
  })

  items.forEach((item) => {
    const url = getAbsoluteURL(item.frontmatter.slug, lang)

    feed.item({
      url,
      guid: url,
      title: item.frontmatter.title,
      description: item.frontmatter.description,
      date: item.frontmatter.date,
      author: layout.root.metadata.author
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  })
}
