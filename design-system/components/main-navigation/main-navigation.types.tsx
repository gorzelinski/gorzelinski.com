import type { RecipeVariantProps } from '@/styled-system/types'
import type { Locale } from '@/types'
import { navigation } from '../../elements/navigation/navigation.styles'

type NavigationVariantProps = RecipeVariantProps<typeof navigation>

type Links = {
  portfolio: string
  about: string
  blog: string
  contact: string
}

export type MainNavigationProps = {
  ariaLabel: string
  lang: Locale
  links: Links
  display?: NonNullable<NavigationVariantProps>['display']
  width?: NonNullable<NavigationVariantProps>['width']
}
