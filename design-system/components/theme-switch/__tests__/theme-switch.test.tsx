import { render, screen } from '@testing-library/react'
import { useTheme } from '@/hooks'
import { ThemeSwitch } from '../theme-switch'

jest.mock('../../../../hooks', () => ({
  useTheme: jest.fn()
}))

const useThemeMock = jest.mocked(useTheme)

describe('ThemeSwitch', () => {
  it('renders correctly', () => {
    useThemeMock.mockReturnValue({ theme: 'light', toggleTheme: jest.fn() })

    render(<ThemeSwitch ariaLabel="theme switch" />)

    const button = screen.getByRole('button')
    const icon = button.firstChild

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', 'theme switch')
    expect(button).toHaveAttribute('title', 'theme switch')
    expect(icon).toBeInTheDocument()
  })

  it('renders the Sunny icon for the light theme', () => {
    useThemeMock.mockReturnValue({ theme: 'light', toggleTheme: jest.fn() })

    render(<ThemeSwitch ariaLabel="theme switch" />)

    const icon = screen.getByTestId('sunny')

    expect(icon).toBeInTheDocument()
  })

  it('renders the Moon icon for the dark theme', () => {
    useThemeMock.mockReturnValue({ theme: 'dark', toggleTheme: jest.fn() })

    render(<ThemeSwitch ariaLabel="theme switch" />)

    const icon = screen.getByTestId('moon')

    expect(icon).toBeInTheDocument()
  })

  it('toggles the theme when clicked', () => {
    const toggleTheme = jest.fn()
    useThemeMock.mockReturnValue({ theme: 'light', toggleTheme })

    render(<ThemeSwitch ariaLabel="theme switch" />)

    const button = screen.getByRole('button')
    button.click()

    expect(toggleTheme).toHaveBeenCalledWith('light')
  })
})
