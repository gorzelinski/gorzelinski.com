import { RecipeVariantProps } from '@/styled-system/types'
import { icon } from './icon.styles'

export type IconProps = RecipeVariantProps<typeof icon> & {
  className?: string
}
