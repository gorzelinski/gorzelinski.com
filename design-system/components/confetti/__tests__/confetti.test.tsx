import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import { Confetti } from '../confetti'
import dictionary from '@/dictionaries/en.json'

let lastConfettiProps: any = null
vi.mock('react-confetti', () => ({
  default: (props: any) => {
    lastConfettiProps = props
    return null
  }
}))

const TEST_PROPS = {
  start: dictionary.component.confetti.start,
  stop: dictionary.component.confetti.stop,
  more: dictionary.component.confetti.more
}

describe('Confetti', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    render(<Confetti {...TEST_PROPS} />)

    const button = screen.getByRole('button')

    expect(button).toBeVisible()
    expect(button).toHaveTextContent(TEST_PROPS.start)
  })

  it('renders stop text after click', () => {
    render(<Confetti {...TEST_PROPS} />)

    const button = screen.getByRole('button')
    act(() => {
      button.click()
    })

    expect(button).toHaveTextContent(TEST_PROPS.stop)
  })

  it('renders more text after rage-clicking', () => {
    render(<Confetti {...TEST_PROPS} />)

    const button = screen.getByRole('button')
    for (let i = 0; i < 12; i++) {
      act(() => {
        button.click()
      })
    }

    expect(button).toHaveTextContent(TEST_PROPS.more)
  })

  it('resets state after rage-clicking and shows start text again', () => {
    render(<Confetti {...TEST_PROPS} />)

    const button = screen.getByRole('button')

    // Click 11 times to reach 'stop' state
    for (let i = 0; i < 11; i++) {
      act(() => {
        button.click()
      })
    }

    expect(button).toHaveTextContent(TEST_PROPS.stop) // 'That's enough 🎉'

    // Click 12th time to reach 'more' state
    act(() => {
      button.click()
    })

    expect(button).toHaveTextContent(TEST_PROPS.more) // 'MORE!'

    // Click 13th time, should show 'stop'
    act(() => {
      button.click()
    })

    expect(button).toHaveTextContent(TEST_PROPS.stop) // 'That's enough 🎉'

    // Click 14th time, should reset to 'start'
    act(() => {
      button.click()
    })

    expect(button).toHaveTextContent(TEST_PROPS.start) // 'More confetti 🎉'
  })

  it('passes correct props to ConfettiComponent', () => {
    render(<Confetti {...TEST_PROPS} />)

    expect(lastConfettiProps).toEqual(
      expect.objectContaining({
        width: expect.any(Number),
        height: expect.any(Number),
        recycle: false,
        numberOfPieces: 200,
        colors: ['#0466c8', '#47a3ff', '#ffbe0a', '#157f1f', '#c92c4e']
      })
    )
  })
})
