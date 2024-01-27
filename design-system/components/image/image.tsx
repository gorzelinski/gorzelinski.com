import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { splitCssProps } from '@/styled-system/jsx'
import { image } from './image.styles'
import { ImageProps } from './image.types'

export const Image = (props: ImageProps) => {
  const [cssProps, imageProps] = splitCssProps(props)

  return (
    <NextImage
      {...(imageProps as NextImageProps)}
      className={image(cssProps)}
    />
  )
}
