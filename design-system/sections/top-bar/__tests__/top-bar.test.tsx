import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { TopBar } from '../top-bar'
import dictionary from '@/dictionaries/en.json'

vi.mock('next/navigation', () => ({
  usePathname: () => '/'
}))

vi.mock('@/hooks', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: vi.fn()
  }),
  useScrollDirection: vi.fn(),
  useScrollProgress: vi.fn()
}))

const useScrollDirectionMock = vi.mocked(useScrollDirection)
const useScrollProgressMock = vi.mocked(useScrollProgress)

describe('TopBar', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders correctly with both navigations', () => {
    useScrollDirectionMock.mockReturnValue('up')
    useScrollProgressMock.mockReturnValue(50)

    render(<TopBar lang="en" dictionary={dictionary} />)

    const navs = screen.getAllByRole('navigation')
    const logo = screen.getByText('MG')
    const themeSwitch = screen.getByRole('button', { name: 'Change theme' })
    const portfolio = screen.getByText('Portfolio')
    const about = screen.getByText('About')
    const blog = screen.getByText('Blog')
    const contact = screen.getByText('Contact')

    expect(navs).toHaveLength(2)
    expect(logo).toHaveAttribute('href', '/')
    expect(themeSwitch).toBeInTheDocument()
    expect(portfolio).toHaveAttribute('href', '/portfolio')
    expect(about).toHaveAttribute('href', '/about')
    expect(blog).toHaveAttribute('href', '/blog')
    expect(contact).toHaveAttribute('href', '#contact')
  })

  it('hides the top bar when scrolling down', () => {
    useScrollDirectionMock.mockReturnValue('down')
    useScrollProgressMock.mockReturnValue(10)

    render(<TopBar lang="en" dictionary={dictionary} />)

    const topBar = screen.getByRole('banner')

    expect(topBar).toHaveClass('op_0')
  })

  it('hides the border when progress is less than 1', () => {
    useScrollDirectionMock.mockReturnValue('up')
    useScrollProgressMock.mockReturnValue(0)

    render(<TopBar lang="en" dictionary={dictionary} />)

    const topBar = screen.getByRole('banner')

    expect(topBar).toHaveClass('bd-c_transparent')
  })

  it('shows the border when progress is greater than 1', () => {
    useScrollDirectionMock.mockReturnValue('up')
    useScrollProgressMock.mockReturnValue(2)

    render(<TopBar lang="en" dictionary={dictionary} />)

    const topBar = screen.getByRole('banner')

    expect(topBar).toHaveClass('bd-b_gray.subtle')
  })
})
