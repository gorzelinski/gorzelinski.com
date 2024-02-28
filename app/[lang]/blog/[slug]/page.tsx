import { MDXRemote } from 'next-mdx-remote/rsc'
import { Locale } from '@/i18n.config'
import { localizeFileName } from '@/lib'
import { getFileByPath } from '@/lib/mdx'
import { H1 } from '@/design-system'

export default function Blog({
  params: { lang, slug }
}: {
  params: {
    lang: Locale
    slug: string
  }
}) {
  const { content, frontmatter } = getFileByPath(
    'content',
    'blog',
    slug,
    localizeFileName(lang)
  )

  return (
    <>
      <H1>{frontmatter.title}</H1>
      <MDXRemote source={content}></MDXRemote>
    </>
  )
}
