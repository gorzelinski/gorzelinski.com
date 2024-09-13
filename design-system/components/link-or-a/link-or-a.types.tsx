import { RecipeVariantProps } from '@/styled-system/types'
import { anchor } from '../../elements/anchor/anchor.styles'

type AnchorVariantProps = RecipeVariantProps<typeof anchor>
export type LinkOrAProps = AnchorVariantProps & {
  children: React.ReactNode
  href: string
}
