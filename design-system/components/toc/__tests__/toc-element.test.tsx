import { render, screen } from '@testing-library/react'
import { TocElement } from '../toc-element'

describe('TocElement', () => {
  it('renders correctly', () => {
    const heading = document.createElement('h2')
    heading.id = 'heading-1'
    heading.textContent = 'Heading 1'

    render(<TocElement heading={heading} />)

    const link = screen.getByRole('link', { name: 'Heading 1' })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#heading-1')
    expect(link).toHaveClass('ml_0')
  })

  it('nests itself correctly (H3)', () => {
    const heading = document.createElement('h3')
    heading.id = 'heading-2'
    heading.textContent = 'Heading 2'

    render(<TocElement heading={heading} />)

    const link = screen.getByRole('link', { name: 'Heading 2' })

    expect(link).toHaveClass('ml_m')
  })

  it('nests itself correctly (H4)', () => {
    const heading = document.createElement('h4')
    heading.id = 'heading-3'
    heading.textContent = 'Heading 3'

    render(<TocElement heading={heading} />)

    const link = screen.getByRole('link', { name: 'Heading 3' })

    expect(link).toHaveClass('ml_xl')
  })
})
