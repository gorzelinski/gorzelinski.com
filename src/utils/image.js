import { getImage, getSrc } from "gatsby-plugin-image"

export const createMetaImage = image => {
  const metaImage = getImage(image?.src)
  return {
    alt: image?.alt,
    src: getSrc(image?.src),
    width: metaImage?.width,
    height: metaImage?.height,
  }
}

export const createFeaturedImage = image => ({
  alt: image?.alt,
  caption: image?.caption,
  srcset: getImage(image?.src),
})
