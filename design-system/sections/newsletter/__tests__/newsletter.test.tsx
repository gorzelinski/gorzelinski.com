import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { useNewsletter } from '@/hooks'
import { Newsletter } from '../newsletter'
import dictionary from '@/dictionaries/en.json'

vi.mock('@/hooks', () => ({
  useNewsletter: vi.fn()
}))

const useNewsletterMock = vi.mocked(useNewsletter)

describe('Newsletter', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders correctly', async () => {
    useNewsletterMock.mockReturnValue({
      state: { status: 'idle' },
      formAction: vi.fn(),
      isPending: false,
      FORM_URL: 'https://example.com'
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

  it('renders the pending state correctly', () => {
    useNewsletterMock.mockReturnValue({
      state: { status: 'idle' },
      formAction: vi.fn(),
      isPending: true,
      FORM_URL: 'https://example.com'
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
      state: { status: 'quarantined', url: 'https://example.com/confirm' },
      formAction: vi.fn(),
      isPending: false,
      FORM_URL: 'https://example.com'
    })

    render(<Newsletter lang="en" dictionary={dictionary.section.newsletter} />)

    const heading = screen.getByText(
      dictionary.section.newsletter.quarantined.heading
    )
    const link = screen.getByRole('link', {
      name: dictionary.section.newsletter.quarantined.link
    })
    const input = screen.queryByRole('textbox')
    const button = screen.queryByRole('button')

    expect(heading).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com/confirm')
    expect(link).toHaveAttribute('target', '_blank')
    expect(input).not.toBeInTheDocument()
    expect(button).not.toBeInTheDocument()
  })

  it('renders the "error" state correctly', () => {
    useNewsletterMock.mockReturnValue({
      state: { status: 'error' },
      formAction: vi.fn(),
      isPending: false,
      FORM_URL: 'https://example.com'
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
    expect(button).toBeEnabled()
  })

  it('renders the "success" state correctly', () => {
    useNewsletterMock.mockReturnValue({
      state: { status: 'success' },
      formAction: vi.fn(),
      isPending: false,
      FORM_URL: 'https://example.com'
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
