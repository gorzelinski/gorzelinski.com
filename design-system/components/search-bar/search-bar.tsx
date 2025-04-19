'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { ChangeEvent } from 'react'
import { useDebouncedCallback } from '@/hooks'
import { Search, Input, InputWrapper } from '@/design-system'
import { SearchBarProps } from './search-bar.types'

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
      <Search
        _peerHover={{
          color: 'gray.500'
        }}
        _peerFocus={{
          color: 'gray.400!'
        }}
      />
    </InputWrapper>
  )
}
