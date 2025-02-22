import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, act, cleanup } from '@testing-library/react'
import { useReducedMotion } from '@/hooks'
import { Typewriter } from '../typewriter'

vi.mock('../../../../hooks', () => ({
  useReducedMotion: vi.fn()
}))

const useReducedMotionMock = vi.mocked(useReducedMotion)

vi.useFakeTimers()

describe('Typewriter', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    useReducedMotionMock.mockReturnValue(false)

    const words = ['Hello']
    render(<Typewriter words={words} />)

    words[0].split('').forEach(() => {
      act(() => vi.advanceTimersToNextTimer())
    })

    const text = screen.getByText('Hello')

    expect(text).toBeInTheDocument()
  })

  it('renders the last word if reduced motion is on', () => {
    useReducedMotionMock.mockReturnValue(true)

    render(<Typewriter words={['Hello', 'World']} />)

    act(() => vi.advanceTimersToNextTimer())

    const text = screen.getByText('World')

    expect(text).toBeInTheDocument()
  })

  it('renders the second word after typing (and deleting) the first word', () => {
    useReducedMotionMock.mockReturnValue(false)

    const words = ['Hello', 'World']
    render(<Typewriter words={words} />)

    // Writing 'Hello'
    words[0].split('').forEach(() => {
      act(() => vi.advanceTimersToNextTimer())
    })

    expect(screen.getByText('Hello')).toBeInTheDocument()

    // Setting the phase to 'deleting'
    act(() => vi.advanceTimersToNextTimer())
    // Deleting 'Hello'
    words[0].split('').forEach(() => {
      act(() => vi.advanceTimersToNextTimer())
    })

    expect(screen.queryByText('Hello')).not.toBeInTheDocument()

    // Writing 'World'
    words[1].split('').forEach(() => {
      act(() => vi.advanceTimersToNextTimer())
    })

    expect(screen.getByText('World')).toBeInTheDocument()
  })

  it('renders the same word in the loop mode', () => {
    useReducedMotionMock.mockReturnValue(false)

    const words = ['Hello']
    render(<Typewriter words={words} loop={true} />)

    // Writing 'Hello'
    words[0].split('').forEach(() => {
      act(() => vi.advanceTimersToNextTimer())
    })

    expect(screen.getByText('Hello')).toBeInTheDocument()

    // Setting the phase to 'deleting'
    act(() => vi.advanceTimersToNextTimer())
    // Deleting 'Hello'
    words[0].split('').forEach(() => {
      act(() => vi.advanceTimersToNextTimer())
    })

    expect(screen.queryByText('Hello')).not.toBeInTheDocument()

    // Writing 'Hello' again
    words[0].split('').forEach(() => {
      act(() => vi.advanceTimersToNextTimer())
    })

    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
