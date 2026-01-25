import { Dictionary } from '@/scripts'
import type { Pagination } from '@/types'

export type PaginationProps = {
  prev: Pagination
  next: Pagination
  dictionary: Dictionary['component']['pagination']
}
