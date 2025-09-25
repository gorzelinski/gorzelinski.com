import { ImageProps as NextImageProps } from 'next/image'
import { RecipeVariantProps } from '@/styled-system/types'
import { image } from './image.styles'

type ImageVariantProps = RecipeVariantProps<typeof image>
export type ImageProps = ImageVariantProps & NextImageProps
export type OptionalNumber = number | undefined
