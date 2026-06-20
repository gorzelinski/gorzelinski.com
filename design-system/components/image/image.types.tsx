import type { ImageProps as NextImageProps } from 'next/image'

import type { RecipeVariantProps } from '@/styled-system/types'
import type { image } from './image.styles'

type ImageVariantProps = RecipeVariantProps<typeof image>
export type ImageProps = ImageVariantProps & NextImageProps
export type OptionalNumber = number | undefined
