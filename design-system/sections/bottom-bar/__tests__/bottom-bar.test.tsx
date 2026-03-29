import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { BottomBar } from '../bottom-bar'
import dictionary from '@/dictionaries/en.json'

vi.mock('next/navigation', () => ({
  usePathname: () => '/'
}))

vi.mock('@/hooks', () => ({
  useScrollDirection: vi.fn(),
  useScrollProgress: vi.fn()
}))

const useScrollDirectionMock = vi.mocked(useScrollDirection)
const useScrollProgressMock = vi.mocked(useScrollProgress)

describe('BottomBar', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders correctly with main navigation', () => {
    useScrollDirectionMock.mockReturnValue('up')
    useScrollProgressMock.mockReturnValue(50)

    render(<BottomBar lang="en" dictionary={dictionary} />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const portfolio = screen.getByText('Portfolio')
    const about = screen.getByText('About')
    const blog = screen.getByText('Blog')
    const contact = screen.getByText('Contact')

    expect(nav).toBeInTheDocument()
    expect(portfolio).toHaveAttribute('href', '/portfolio')
    expect(about).toHaveAttribute('href', '/about')
    expect(blog).toHaveAttribute('href', '/blog')
    expect(contact).toHaveAttribute('href', '#contact')
  })

  it('hides when scrolling down', () => {
    useScrollDirectionMock.mockReturnValue('down')
    useScrollProgressMock.mockReturnValue(10)

    render(<BottomBar lang="en" dictionary={dictionary} />)

    const wrapper = screen.getByRole('navigation').parentElement!

    expect(wrapper).toHaveClass('op_0')
  })

  it('stays visible when scrolling up', () => {
    useScrollDirectionMock.mockReturnValue('up')
    useScrollProgressMock.mockReturnValue(10)

    render(<BottomBar lang="en" dictionary={dictionary} />)

    const wrapper = screen.getByRole('navigation').parentElement!

    expect(wrapper).toHaveClass('op_97')
  })
})
