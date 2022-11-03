export const extractPostData = data => {
  const locale = data.fields?.locale
  const slug = data.fields?.slug
  const image = data.frontmatter?.image
  const date = data.frontmatter?.date
  const updated = data.frontmatter?.updated
  const rawDate = data.frontmatter?.rawDate
  const rawUpdated = data.frontmatter?.rawUpdated
  const title = data.frontmatter?.title
  const description = data.frontmatter?.description
  const timeToRead = data?.timeToRead
  const body = data?.body

  return {
    locale,
    slug,
    image,
    date,
    updated,
    rawDate,
    rawUpdated,
    title,
    description,
    timeToRead,
    body,
  }
}
