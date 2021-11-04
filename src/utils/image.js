import { getImage, getSrc } from "gatsby-plugin-image"

export const createMetaImage = image => ({
  alt: image.alt,
  src: getSrc(image.src),
  width: getImage(image.src).width,
  height: getImage(image.src).height,
})
