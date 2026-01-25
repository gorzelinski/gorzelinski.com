import type { Dictionary, Pagination } from '@/types'

export type PaginationProps = {
  prev: Pagination
  next: Pagination
  dictionary: Dictionary['component']['pagination']
}
