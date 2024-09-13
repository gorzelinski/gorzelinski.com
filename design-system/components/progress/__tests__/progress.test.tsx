import { render, screen } from '@testing-library/react'
import { useScrollProgress } from '@/hooks'
import { Progress } from '../progress'

jest.mock('../../../../hooks', () => ({
  useScrollProgress: jest.fn()
}))

const useScrollProgressMock = jest.mocked(useScrollProgress)

describe('Progress', () => {
  it('renders correctly', () => {
    useScrollProgressMock.mockReturnValue(50)

    render(<Progress selector="html" />)

    const progress = screen.getByTestId('progress')
    const progressBar = progress.firstChild

    expect(progress).toBeInTheDocument()
    expect(progress).toHaveClass('opacity_100')
    expect(progressBar).toHaveStyle('width: 50.00%')
  })

  it('hides when the progress is less than 1%', () => {
    useScrollProgressMock.mockReturnValue(0)

    render(<Progress selector="html" />)

    const progress = screen.getByTestId('progress')

    expect(progress).toHaveClass('opacity_0')
  })

  it('hides when the progress is greater than 99%', () => {
    useScrollProgressMock.mockReturnValue(100)

    render(<Progress selector="html" />)

    const progress = screen.getByTestId('progress')

    expect(progress).toHaveClass('opacity_0')
  })
})
