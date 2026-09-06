import type { ReactNode } from 'react'

import type {
  RecipeVariantProps,
  SystemStyleObject
} from '@/styled-system/types'
import type { details } from './details.styles'

type DetailsVariantProps = RecipeVariantProps<typeof details>

export type DetailsProps = DetailsVariantProps & {
  children?: ReactNode
  css?: SystemStyleObject
  open?: boolean
  summary: string
}
