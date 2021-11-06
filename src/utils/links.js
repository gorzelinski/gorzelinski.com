export const createShareLinks = (url, title) => ({
  twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}`,
  facebook: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
    url
  )}&quote=${encodeURIComponent(title)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`,
})

export const createSocialLinks = ({
  github,
  dribbble,
  twitter,
  facebook,
  linkedin,
}) => ({
  github: `https://github.com/${github}`,
  dribbble: `https://dribbble.com/${dribbble}`,
  twitter: `https://twitter.com/${twitter}`,
  facebook: `https://www.facebook.com/${facebook}`,
  linkedin: `https://www.linkedin.com/in/${linkedin}`,
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
