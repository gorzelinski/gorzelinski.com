import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { SearchBar } from '../search-bar'

const mockReplace = vi.fn()
vi.mock('next/navigation', () => ({
  useSearchParams: () => new URLSearchParams('query=test'),
  usePathname: () => '/blog',
  useRouter: () => ({
    replace: mockReplace
  })
}))

vi.mock('@/lib', () => ({
  debounce: (fn: Function) => fn
}))

describe('SearchBar', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders correctly with placeholder', () => {
    const placeholder = 'Search blog posts...'

    render(<SearchBar placeholder={placeholder} />)

    const input = screen.getByRole('searchbox')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'search')
    expect(input).toHaveAttribute('type', 'search')
    expect(input).toHaveAttribute('aria-label', placeholder)
    expect(input).toHaveAttribute('placeholder', placeholder)
    expect(input.className).toContain('peer')
  })

  it('sets default value from URL search params', () => {
    render(<SearchBar placeholder="Search" />)

    const input = screen.getByRole('searchbox')

    expect(input).toHaveValue('test')
  })

  it('updates URL when search term changes', () => {
    render(<SearchBar placeholder="Search" />)

    const input = screen.getByRole('searchbox')
    fireEvent.change(input, { target: { value: 'typescript' } })

    expect(mockReplace).toHaveBeenCalledWith('/blog?query=typescript')
  })

  it('removes query parameter when search term is empty', () => {
    render(<SearchBar placeholder="Search" />)

    const input = screen.getByRole('searchbox')
    fireEvent.change(input, { target: { value: '' } })

    expect(mockReplace).toHaveBeenCalledWith('/blog?')
  })
})
