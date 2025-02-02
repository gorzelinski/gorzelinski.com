import { render, screen } from '@testing-library/react'
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
  it('renders correctly', () => {
    const heading = createHeading('h2', 'heading-1', 'Heading 1')

    render(<TocElement activeID="heading-1" heading={heading} />)

    const link = screen.getByRole('link', { name: 'Heading 1' })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#heading-1')
    expect(link).toHaveClass('ml_0')
  })

  it('nests itself correctly (H3)', () => {
    const heading = createHeading('h3', 'heading-2', 'Heading 2')

    render(<TocElement activeID="heading-1" heading={heading} />)

    const link = screen.getByRole('link', { name: 'Heading 2' })

    expect(link).toHaveClass('ml_m')
  })

  it('nests itself correctly (H4)', () => {
    const heading = createHeading('h4', 'heading-3', 'Heading 3')

    render(<TocElement activeID="heading-1" heading={heading} />)

    const link = screen.getByRole('link', { name: 'Heading 3' })

    expect(link).toHaveClass('ml_xl')
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
