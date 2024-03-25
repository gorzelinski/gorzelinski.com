import { Locale } from '@/i18n.config'
import { localizeFileName, localizePath } from '@/lib'
import { getDictionary } from '@/lib/dictionaries'
import { getFileByPath, getFilesByDirectory } from '@/lib/mdx'
import { ButtonLink, H1, Post, verticalRhythm } from '@/design-system'
import { Grid } from '@/styled-system/jsx'

export default async function Blog({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  const directories = getFilesByDirectory('content', 'blog')
  const posts = directories.map((slug) => {
    const file = getFileByPath('content', 'blog', slug, localizeFileName(lang))
    file.frontmatter.slug = slug

    return file
  })
  const { component } = await getDictionary(lang)

  return (
    <>
      <div>
        <H1>Blog page</H1>
        <ButtonLink style="text" href={localizePath(lang, '/')}>
          Home
        </ButtonLink>
      </div>

      <Grid gridTemplateColumns={{ base: '1fr' }} css={verticalRhythm}>
        {posts.map(({ frontmatter }) => (
          <Post
            key={frontmatter.slug}
            lang={lang}
            date={frontmatter.date}
            readingTime={frontmatter.readingTime}
            title={frontmatter.title}
            description={frontmatter.description}
            image={frontmatter.image}
            slug={frontmatter.slug}
            dictionary={component.post}
          ></Post>
        ))}
      </Grid>
    </>
  )
}
