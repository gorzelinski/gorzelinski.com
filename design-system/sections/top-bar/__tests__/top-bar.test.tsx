import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import dictionary from '@/dictionaries/en.json'
import { useScroll } from '@/providers'
import { TopBar } from '../top-bar'

vi.mock('next/navigation', () => ({
  usePathname: () => '/'
}))

vi.mock('@/hooks', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: vi.fn()
  })
}))

vi.mock('@/providers', () => ({
  useScroll: vi.fn()
}))

const useScrollMock = vi.mocked(useScroll)

describe('TopBar', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders correctly with both navigations', () => {
    useScrollMock.mockReturnValue({ direction: 'up', progress: 50 })

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
    useScrollMock.mockReturnValue({ direction: 'down', progress: 10 })

    render(<TopBar lang="en" dictionary={dictionary} />)

    const topBar = screen.getByRole('banner')

    expect(topBar).toHaveClass('op_0')
  })

  it('hides the border when progress is less than 1', () => {
    useScrollMock.mockReturnValue({ direction: 'up', progress: 0 })

    render(<TopBar lang="en" dictionary={dictionary} />)

    const topBar = screen.getByRole('banner')

    expect(topBar).toHaveClass('bd-c_transparent')
  })

  it('shows the border when progress is greater than 1', () => {
    useScrollMock.mockReturnValue({ direction: 'up', progress: 2 })

    render(<TopBar lang="en" dictionary={dictionary} />)

    const topBar = screen.getByRole('banner')

    expect(topBar).toHaveClass('bd-b_gray.subtle')
  })
})
