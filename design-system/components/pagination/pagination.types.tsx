import { Dictionary, Pagination } from '@/scripts'

export type PaginationProps = {
  prev: Pagination
  next: Pagination
  dictionary: Dictionary['component']['pagination']
}
