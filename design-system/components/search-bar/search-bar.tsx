'use client'
import type { ChangeEvent } from 'react'
import type { SearchBarProps } from './search-bar.types'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from '@/hooks'
import { SearchIcon, Input, InputWrapper, Search } from '@/design-system'

export const SearchBar = ({ placeholder }: SearchBarProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  })

  return (
    <Search>
      <InputWrapper width="stretch">
        <Input
          id="search"
          className="peer"
          type="search"
          aria-label={placeholder}
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          defaultValue={searchParams.get('query')?.toString()}
        />
        <SearchIcon inputState />
      </InputWrapper>
    </Search>
  )
}
