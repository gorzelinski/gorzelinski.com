import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LinkOrA } from '../link-or-a'

describe('LinkOrA', () => {
  it('renders the Next link when the href is internal', () => {
    render(<LinkOrA href="/internal">Internal Link</LinkOrA>)

    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/internal')
    expect(link).not.toHaveAttribute('rel', 'nofollow noopener noreferrer')
    expect(link).not.toHaveAttribute('target', '_blank')
  })

  it('renders a standard link when the href is external', () => {
    render(<LinkOrA href="https://external.com">External Link</LinkOrA>)

    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', 'https://external.com')
    expect(link).toHaveAttribute('rel', 'nofollow noopener noreferrer')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
