import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { useScroll } from '@/providers'
import { Progress } from '../progress'

vi.mock('@/providers', () => ({
  useScroll: vi.fn()
}))

const useScrollMock = vi.mocked(useScroll)

describe('Progress', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    useScrollMock.mockReturnValue({ direction: 'up', progress: 50 })

    render(<Progress selector="html" />)

    const progress = screen.getByTestId('progress')
    const progressBar = progress.firstChild

    expect(progress).toBeInTheDocument()
    expect(progress).toHaveClass('op_100')
    expect(progressBar).toHaveStyle('width: 50.00%')
  })

  it('hides when the progress is less than 1%', () => {
    useScrollMock.mockReturnValue({ direction: 'up', progress: 0 })

    render(<Progress selector="html" />)

    const progress = screen.getByTestId('progress')

    expect(progress).toHaveClass('op_0')
  })

  it('hides when the progress is greater than 99%', () => {
    useScrollMock.mockReturnValue({ direction: 'up', progress: 100 })

    render(<Progress selector="html" />)

    const progress = screen.getByTestId('progress')

    expect(progress).toHaveClass('op_0')
  })
})
