export const createShareLinks = (url, title) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  }
}

export const createSocialLinks = ({
  github,
  twitter,
  dribbble,
  facebook,
  instagram,
  linkedin,
}) => ({
  ...(github && { github: `https://github.com/${github}` }),
  ...(twitter && { twitter: `https://twitter.com/${twitter}` }),
  ...(dribbble && { dribbble: `https://dribbble.com/${dribbble}` }),
  ...(facebook && { facebook: `https://www.facebook.com/${facebook}` }),
  ...(instagram && { instagram: `https://www.instagram.com/${instagram}/` }),
  ...(linkedin && { linkedin: `https://www.linkedin.com/in/${linkedin}` }),
})

export const createPaginationLinks = (pageSlug, previous, next) => ({
  prev: previous && {
    text: previous.frontmatter.title,
    slug: `${pageSlug}${previous.fields.slug}`,
  },
  next: next && {
    text: next.frontmatter.title,
    slug: `${pageSlug}${next.fields.slug}`,
  },
})

export const isInternal = (siteUrl, href) => {
  const pageUrl = new URL(siteUrl)
  const linkUrl = new URL(href, siteUrl)
  return linkUrl.host === pageUrl.host
}
