import type { ComponentPropsWithRef } from 'react'
import type { SystemStyleObject } from '@/styled-system/types'

export type TableWrapperProps = ComponentPropsWithRef<'div'> & {
  css?: SystemStyleObject
}
