import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { splitCssProps } from '@/styled-system/jsx'
import { image } from './image.styles'
import { ImageProps } from './image.types'

export const Image = (props: ImageProps) => {
  const [cssProps, imageProps] = splitCssProps(props)
  const { aspectRatio, borderRadius } = cssProps
  const width = typeof cssProps.width === 'number' ? cssProps.width : undefined
  const height =
    typeof cssProps.height === 'number' ? cssProps.height : undefined

  return (
    <NextImage
      {...(imageProps as NextImageProps)}
      width={width}
      height={height}
      className={image({
        aspectRatio: aspectRatio as ImageProps['aspectRatio'],
        borderRadius: borderRadius as ImageProps['borderRadius']
      })}
    />
  )
}
