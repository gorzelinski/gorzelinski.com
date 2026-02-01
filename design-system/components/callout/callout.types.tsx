import type { ReactNode, JSX } from 'react'
import type {
  RecipeVariantProps,
  SystemStyleObject
} from '@/styled-system/types'
import { callout } from './callout.styles'

type CalloutVariantProps = RecipeVariantProps<typeof callout>
export type CalloutProps = CalloutVariantProps & {
  children?: ReactNode
  css?: SystemStyleObject
  title?: string
}

type CalloutVariants = NonNullable<NonNullable<CalloutVariantProps>['variant']>
export type CalloutIcons = Record<CalloutVariants, JSX.Element>
