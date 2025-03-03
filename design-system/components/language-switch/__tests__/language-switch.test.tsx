import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { LanguageSwitch } from '../language-switch'
import { i18n } from '@/i18n.config'

vi.mock('next/navigation', () => ({
  usePathname: () => '/about'
}))

describe('LanguageSwitch', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the correct number of buttons', () => {
    render(<LanguageSwitch lang="en" />)

    const buttons = screen.getAllByRole('link')

    expect(buttons).toHaveLength(2)
  })

  it('renders the correct button text', () => {
    render(<LanguageSwitch lang="en" />)

    const languages = ['English', 'Polski']
    const buttons = screen.getAllByRole('link')

    buttons.forEach((button, index) => {
      expect(button).toHaveTextContent(languages[index])
    })
  })

  it('renders the correct lang attribute', () => {
    render(<LanguageSwitch lang="en" />)

    const buttons = screen.getAllByRole('link')

    buttons.forEach((button, index) => {
      expect(button).toHaveAttribute('lang', i18n.locales[index])
    })
  })

  it('renders the correct href attribute', () => {
    render(<LanguageSwitch lang="en" />)

    const englishButton = screen.getByText('English')
    const polishButton = screen.getByText('Polski')

    expect(englishButton).toHaveAttribute('href', '/about')
    expect(polishButton).toHaveAttribute('href', '/pl/about')
  })

  it('renders the correct hrefLang attribute', () => {
    render(<LanguageSwitch lang="en" />)

    const buttons = screen.getAllByRole('link')

    buttons.forEach((button, index) => {
      expect(button).toHaveAttribute('hrefLang', i18n.locales[index])
    })
  })
})
