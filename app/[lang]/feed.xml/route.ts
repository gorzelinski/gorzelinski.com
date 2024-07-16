import RSS from 'rss'
import { PageProps } from '@/types'
import { LINKS, metadataBase } from '@/constants'
import { getDictionary, getMDXes } from '@/scripts'

export async function GET(request: Request, { params: { lang } }: PageProps) {
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
    image_url: new URL(LINKS.logo, metadataBase).href,
    feed_url: new URL(LINKS.rss, metadataBase).href,
    site_url: metadataBase.href,
    managingEditor: layout.root.metadata.author,
    webMaster: layout.root.metadata.author,
    copyright: `© ${new Date().getFullYear().toString()} ${layout.root.metadata.author}`,
    pubDate: new Date().toUTCString(),
    generator: layout.root.metadata.generator,
    ttl: 60
  })

  items.forEach((item) => {
    const url = new URL(item.frontmatter.slug, metadataBase).href

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
