const extractCommonData = data => {
  const locale = data.fields?.locale
  const slug = data.fields?.slug
  const image = data.frontmatter?.image
  const date = data.frontmatter?.date
  const updated = data.frontmatter?.updated
  const title = data.frontmatter?.title
  const description = data.frontmatter?.description
  const body = data?.body

  return {
    locale,
    slug,
    image,
    date,
    updated,
    title,
    description,
    body,
  }
}

export const extractPostData = data => {
  const timeToRead = data?.timeToRead

  return {
    ...extractCommonData(data),
    timeToRead,
  }
}

export const extractProjectData = data => {
  const client = data.frontmatter?.client
  const services = data.frontmatter?.services
  const deliverables = data.frontmatter?.deliverables
  const links = data.frontmatter?.links

  return {
    ...extractCommonData(data),
    client,
    services,
    deliverables,
    links,
  }
}
