import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { useTheme } from '@/hooks'
import { ThemeSwitch } from '../theme-switch'

vi.mock('@/hooks', () => ({
  useTheme: vi.fn()
}))

const useThemeMock = vi.mocked(useTheme)

describe('ThemeSwitch', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    useThemeMock.mockReturnValue({ theme: 'light', toggleTheme: vi.fn() })

    render(<ThemeSwitch ariaLabel="theme switch" />)

    const button = screen.getByRole('button')
    const icon = button.firstChild

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', 'theme switch')
    expect(button).toHaveAttribute('title', 'theme switch')
    expect(icon).toBeInTheDocument()
  })

  it('shows the Sunny icon in light theme', () => {
    useThemeMock.mockReturnValue({ theme: 'light', toggleTheme: vi.fn() })

    render(<ThemeSwitch ariaLabel="theme switch" />)

    expect(screen.getByTestId('sunny')).toHaveClass('op_1')
    expect(screen.getByTestId('moon')).toHaveClass('op_0')
  })

  it('shows the Moon icon in dark theme', () => {
    useThemeMock.mockReturnValue({ theme: 'dark', toggleTheme: vi.fn() })

    render(<ThemeSwitch ariaLabel="theme switch" />)

    expect(screen.getByTestId('moon')).toHaveClass('op_1')
    expect(screen.getByTestId('sunny')).toHaveClass('op_0')
  })

  it('toggles the theme when clicked', () => {
    const toggleTheme = vi.fn()
    useThemeMock.mockReturnValue({ theme: 'light', toggleTheme })

    render(<ThemeSwitch ariaLabel="theme switch" />)

    const button = screen.getByRole('button')
    button.click()

    expect(toggleTheme).toHaveBeenCalledWith('light')
  })
})
