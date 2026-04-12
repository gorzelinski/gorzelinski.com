import type { ComponentPropsWithoutRef } from 'react'
import type { SystemStyleObject } from '@/styled-system/types'

export type TableWrapperProps = ComponentPropsWithoutRef<'div'> & {
  css?: SystemStyleObject
}
