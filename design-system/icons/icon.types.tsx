import type { RecipeVariantProps } from '@/styled-system/types'
import type { icon } from './icon.styles'

export type IconProps = RecipeVariantProps<typeof icon> & {
  className?: string
  'data-testid'?: string
}
