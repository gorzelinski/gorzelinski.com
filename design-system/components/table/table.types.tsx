import type { ComponentPropsWithoutRef } from 'react'
import type { SystemStyleObject } from '@/styled-system/types'

export type TableProps = ComponentPropsWithoutRef<'table'> & {
  css?: SystemStyleObject
}
