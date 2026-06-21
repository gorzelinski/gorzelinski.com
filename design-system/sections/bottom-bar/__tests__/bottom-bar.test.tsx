import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import dictionary from '@/dictionaries/en.json'
import { useScroll } from '@/providers'
import { BottomBar } from '../bottom-bar'

vi.mock('next/navigation', () => ({
  usePathname: () => '/'
}))

vi.mock('@/providers', () => ({
  useScroll: vi.fn()
}))

const useScrollMock = vi.mocked(useScroll)

describe('BottomBar', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders correctly with main navigation', () => {
    useScrollMock.mockReturnValue({ direction: 'up', progress: 50 })

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
    useScrollMock.mockReturnValue({ direction: 'down', progress: 10 })

    render(<BottomBar lang="en" dictionary={dictionary} />)

    const wrapper = screen.getByRole('navigation').parentElement!

    expect(wrapper).toHaveClass('op_0')
  })

  it('stays visible when scrolling up', () => {
    useScrollMock.mockReturnValue({ direction: 'up', progress: 10 })

    render(<BottomBar lang="en" dictionary={dictionary} />)

    const wrapper = screen.getByRole('navigation').parentElement!

    expect(wrapper).toHaveClass('op_97')
  })
})
