import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { TocElement } from '../toc-element'

export const createHeading = (
  heading: 'h2' | 'h3' | 'h4',
  id: string,
  textContent: string
) => {
  const headingElement = document.createElement(heading)
  headingElement.id = id
  headingElement.textContent = textContent

  return headingElement
}

describe('TocElement', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    const heading = createHeading('h2', 'heading-1', 'Heading 1')

    render(<TocElement activeID="heading-1" heading={heading} />)

    const link = screen.getByRole('link', { name: 'Heading 1' })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#heading-1')
  })

  it('adds active class when active', () => {
    const heading = createHeading('h2', 'heading-1', 'Heading 1')

    render(<TocElement activeID="heading-1" heading={heading} />)

    const link = screen.getByRole('link', { name: 'Heading 1' })

    expect(link).toHaveClass('active-subtle')
  })

  it("doesn't add active class when not active", () => {
    const heading = createHeading('h2', 'heading-1', 'Heading 1')

    render(<TocElement activeID="heading-2" heading={heading} />)

    const link = screen.getByRole('link', { name: 'Heading 1' })

    expect(link).not.toHaveClass('active-subtle')
  })
})
