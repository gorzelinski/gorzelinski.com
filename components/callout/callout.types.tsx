import React from 'react'
import { RecipeVariantProps } from '@/styled-system/types'
import { callout } from './callout.styles'

type CalloutVariantProps = RecipeVariantProps<typeof callout>
export type CalloutProps = CalloutVariantProps & { children: React.ReactNode }

type CalloutStyles = NonNullable<NonNullable<CalloutVariantProps>['style']>
export type CalloutIcons = {
  [style in CalloutStyles]: JSX.Element
}
