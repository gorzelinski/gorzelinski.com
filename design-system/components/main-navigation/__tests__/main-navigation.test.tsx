import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MainNavigation } from '../main-navigation'

vi.mock('next/navigation', () => ({
  usePathname: () => '/'
}))

const links = {
  portfolio: 'Portfolio',
  about: 'About',
  blog: 'Blog',
  contact: 'Contact'
}

describe('MainNavigation', () => {
  it('renders all navigation links', () => {
    render(
      <MainNavigation ariaLabel="Main navigation" lang="en" links={links} />
    )

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
})
