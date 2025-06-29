import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { useHeadings, useScrollProgress, useScrollToHeading } from '@/hooks'
import { Toc } from '../toc'
import { createHeading } from './toc-element.test'
import dictionary from '@/dictionaries/en.json'

const ariaLabel = dictionary.component.toc.ariaLabel
const headings = [
  createHeading('h2', 'heading-1', 'Heading 1'),
  createHeading('h3', 'heading-2', 'Heading 2')
]

vi.mock('@/hooks', () => ({
  useHeadings: vi.fn(),
  useScrollProgress: vi.fn(),
  useScrollToHeading: vi.fn()
}))

const useScrollProgressMock = vi.mocked(useScrollProgress)
const useHeadingsMock = vi.mocked(useHeadings)
const useScrollToHeadingMock = vi.mocked(useScrollToHeading)

describe('Toc', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it("doesn't render without headings", () => {
    useHeadingsMock.mockReturnValue({ headings: [], activeID: 'heading-1' })
    useScrollProgressMock.mockReturnValue(50)
    useScrollToHeadingMock.mockReturnValue({ current: null })

    render(<Toc ariaLabel={ariaLabel} />)

    const toc = screen.queryByRole('navigation')

    expect(toc).not.toBeInTheDocument()
  })

  it('renders correctly', async () => {
    useHeadingsMock.mockReturnValue({ headings, activeID: 'heading-1' })
    useScrollProgressMock.mockReturnValue(50)
    useScrollToHeadingMock.mockReturnValue({ current: null })

    render(<Toc ariaLabel={ariaLabel} />)

    const toc = screen.getByRole('navigation')
    const h2 = screen.getByRole('link', { name: 'Heading 1' })
    const h3 = screen.getByRole('link', { name: 'Heading 2' })

    expect(toc).toBeInTheDocument()
    expect(toc).toHaveAttribute('aria-label', ariaLabel)
    expect(toc).toHaveClass('opacity_100')
    expect(h2).toBeInTheDocument()
    expect(h2).toHaveAttribute('href', '#heading-1')
    expect(h3).toBeInTheDocument()
    expect(h3).toHaveAttribute('href', '#heading-2')
  })

  it('hides the toc when progress is less than 5', async () => {
    useHeadingsMock.mockReturnValue({ headings, activeID: 'heading-1' })
    useScrollProgressMock.mockReturnValue(4)
    useScrollToHeadingMock.mockReturnValue({ current: null })

    render(<Toc ariaLabel={ariaLabel} />)

    const toc = screen.getByRole('navigation')

    expect(toc).toHaveClass('opacity_0')
  })

  it('calls useScrollToHeading with activeID', () => {
    useHeadingsMock.mockReturnValue({ headings, activeID: 'heading-1' })
    useScrollProgressMock.mockReturnValue(50)
    useScrollToHeadingMock.mockReturnValue({ current: null })

    render(<Toc ariaLabel={ariaLabel} />)

    expect(useScrollToHeadingMock).toHaveBeenCalledWith('heading-1')
  })
})
