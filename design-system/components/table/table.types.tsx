import type { ComponentPropsWithRef } from 'react'
import type { SystemStyleObject } from '@/styled-system/types'

export type TableProps = ComponentPropsWithRef<'table'> & {
  css?: SystemStyleObject
}
