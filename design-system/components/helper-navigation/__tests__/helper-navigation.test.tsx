import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HelperNavigation } from '../helper-navigation'

vi.mock('@/hooks', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: vi.fn()
  })
}))

describe('HelperNavigation', () => {
  it('renders logo and theme switch', () => {
    render(
      <HelperNavigation
        ariaLabel="Helper navigation"
        lang="en"
        logoAriaLabel="Matthew Gorzelinski"
        themeAriaLabel="Change theme"
      />
    )

    const nav = screen.getByRole('navigation', { name: 'Helper navigation' })
    const logo = screen.getByText('MG')
    const themeSwitch = screen.getByRole('button', { name: 'Change theme' })

    expect(nav).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '/')
    expect(themeSwitch).toBeInTheDocument()
  })
})
