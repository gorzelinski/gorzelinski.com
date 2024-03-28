import React from 'react'
import { RecipeVariantProps, SystemStyleObject } from '@/styled-system/types'
import { callout } from './callout.styles'

type CalloutVariantProps = RecipeVariantProps<typeof callout>
export type CalloutProps = CalloutVariantProps & {
  children?: React.ReactNode
  css?: SystemStyleObject
}

type CalloutVariants = NonNullable<NonNullable<CalloutVariantProps>['variant']>
export type CalloutIcons = {
  [variant in CalloutVariants]: JSX.Element
}
