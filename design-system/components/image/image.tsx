import type { ImageProps as NextImageProps } from 'next/image'
import type { ImageProps, OptionalNumber } from './image.types'
import NextImage from 'next/image'
import { splitCssProps } from '@/styled-system/jsx'
import { image } from './image.styles'

export const Image = (props: ImageProps) => {
  const [cssProps, imageProps] = splitCssProps(props)
  const { aspectRatio, borderRadius, width, height } = cssProps

  return (
    <NextImage
      {...(imageProps as NextImageProps)}
      width={width as OptionalNumber}
      height={height as OptionalNumber}
      className={image({
        aspectRatio: aspectRatio as ImageProps['aspectRatio'],
        borderRadius: borderRadius as ImageProps['borderRadius']
      })}
    />
  )
}
