import React from 'react'
import { render, screen } from '@testing-library/react'
import { useScrollProgress } from '@/hooks'
import { Toc } from '../toc'
import { createHeading } from './toc-element.test'
import dictionary from '@/dictionaries/en.json'

const ariaLabel = dictionary.component.toc.ariaLabel
const headings = [
  createHeading('h2', 'heading-1', 'Heading 1'),
  createHeading('h3', 'heading-2', 'Heading 2')
]

jest.mock('../../../../hooks', () => ({
  useScrollProgress: jest.fn()
}))

const useScrollProgressMock = jest.mocked(useScrollProgress)

describe('Toc', () => {
  it("doesn't render without headings", () => {
    jest.spyOn(React, 'useState').mockReturnValueOnce([[], jest.fn()])

    render(<Toc ariaLabel={ariaLabel} />)

    const toc = screen.queryByRole('navigation')

    expect(toc).not.toBeInTheDocument()
  })

  it('renders correctly', async () => {
    useScrollProgressMock.mockReturnValue(50)
    jest.spyOn(React, 'useState').mockReturnValueOnce([headings, jest.fn()])

    render(<Toc ariaLabel={ariaLabel} />)

    const toc = screen.getByRole('navigation')
    const h2 = screen.getByRole('link', { name: 'Heading 1' })
    const h3 = screen.getByRole('link', { name: 'Heading 2' })

    expect(toc).toBeInTheDocument()
    expect(toc).toHaveAttribute('aria-label', ariaLabel)
    expect(h2).toBeInTheDocument()
    expect(h2).toHaveAttribute('href', '#heading-1')
    expect(h3).toBeInTheDocument()
    expect(h3).toHaveAttribute('href', '#heading-2')
  })

  it('hides the toc when progress is less than 5', async () => {
    useScrollProgressMock.mockReturnValue(4)
    jest.spyOn(React, 'useState').mockReturnValueOnce([headings, jest.fn()])

    render(<Toc ariaLabel={ariaLabel} />)

    const toc = screen.getByRole('navigation')

    expect(toc).toHaveClass('opacity_0')
  })
})
