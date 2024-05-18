import { Pagination } from '@/lib/mdx'
import { Dictionary } from '@/lib/dictionaries'

export type PaginationProps = {
  prev: Pagination
  next: Pagination
  dictionary: Dictionary['component']['pagination']
}
