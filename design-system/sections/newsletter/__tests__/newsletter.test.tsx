import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { useNewsletter } from '@/hooks'
import { Newsletter } from '../newsletter'
import dictionary from '@/dictionaries/en.json'

vi.mock('../../../../hooks', () => ({
  useNewsletter: vi.fn()
}))

const useNewsletterMock = vi.mocked(useNewsletter)

describe('Newsletter', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', async () => {
    useNewsletterMock.mockReturnValue({
      FORM_URL: 'https://example.com',
      state: 'idle',
      setState: vi.fn(),
      handleSubmit: vi.fn()
    })

    render(<Newsletter lang="en" dictionary={dictionary.section.newsletter} />)

    const heading = screen.getByRole('heading', { level: 2 })
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    const icon = screen.getByTestId('send')

    expect(heading).toBeInTheDocument()

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('required')
    expect(input).toHaveAttribute('id', 'email')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('name', 'email_address')
    expect(input).toHaveAttribute(
      'aria-label',
      dictionary.section.newsletter.email
    )
    expect(input).toHaveAttribute(
      'placeholder',
      dictionary.section.newsletter.email
    )
    expect(input).toBeEnabled()
    expect(input.className).toContain('peer')

    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()

    expect(icon).toBeInTheDocument()
  })

  it('renders the "loading" state correctly', () => {
    useNewsletterMock.mockReturnValue({
      FORM_URL: 'https://example.com',
      state: 'loading',
      setState: vi.fn(),
      handleSubmit: vi.fn()
    })

    render(<Newsletter lang="en" dictionary={dictionary.section.newsletter} />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    const sync = screen.getByTestId('sync')
    const send = screen.queryByTestId('send')

    expect(input).toBeDisabled()
    expect(button).toBeDisabled()
    expect(sync).toBeInTheDocument()
    expect(send).not.toBeInTheDocument()
  })

  it('renders the "quarantined" state correctly', () => {
    useNewsletterMock.mockReturnValue({
      FORM_URL: 'https://example.com',
      state: 'quarantined',
      setState: vi.fn(),
      handleSubmit: vi.fn()
    })

    render(<Newsletter lang="en" dictionary={dictionary.section.newsletter} />)

    const heading = screen.getByText(
      dictionary.section.newsletter.quarantined.heading
    )
    const input = screen.queryByRole('textbox')
    const button = screen.queryByRole('button')

    expect(heading).toBeInTheDocument()
    expect(input).not.toBeInTheDocument()
    expect(button).not.toBeInTheDocument()
  })

  it('renders the "error" state correctly', () => {
    const setStateMock = vi.fn()
    useNewsletterMock.mockReturnValue({
      FORM_URL: 'https://example.com',
      state: 'error',
      setState: setStateMock,
      handleSubmit: vi.fn()
    })

    render(<Newsletter lang="en" dictionary={dictionary.section.newsletter} />)

    const heading = screen.getByText(
      dictionary.section.newsletter.error.heading
    )
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    expect(heading).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toBeEnabled()
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()

    input.click()

    expect(setStateMock).toHaveBeenCalledWith('idle')
  })

  it('renders the "success" state correctly', () => {
    useNewsletterMock.mockReturnValue({
      FORM_URL: 'https://example.com',
      state: 'success',
      setState: vi.fn(),
      handleSubmit: vi.fn()
    })

    render(<Newsletter lang="en" dictionary={dictionary.section.newsletter} />)

    const heading = screen.getByText(
      dictionary.section.newsletter.success.heading
    )
    const input = screen.queryByRole('textbox')
    const button = screen.queryByRole('button')

    expect(heading).toBeInTheDocument()
    expect(input).not.toBeInTheDocument()
    expect(button).not.toBeInTheDocument()
  })
})
