import React from 'react'
import { RecipeVariantProps } from '@/styled-system/types'
import { callout } from './callout.styles'

type CalloutVariantProps = RecipeVariantProps<typeof callout>
export type CalloutProps = CalloutVariantProps & { children: React.ReactNode }

type CalloutVariants = NonNullable<NonNullable<CalloutVariantProps>['variant']>
export type CalloutIcons = {
  [variant in CalloutVariants]: JSX.Element
}
