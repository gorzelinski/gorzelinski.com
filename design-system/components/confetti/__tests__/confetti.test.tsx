import { afterEach, describe, expect, it } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import { Confetti } from '../confetti'

const text = {
  start: 'More confetti',
  stop: "That's enough",
  more: 'MORE!'
}

describe('Confetti', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Confetti start={text.start} stop={text.stop} more={text.more} />)

    const button = screen.getByRole('button')

    expect(button).toBeVisible()
    expect(button).toHaveTextContent(text.start)
  })

  it('renders stop text after click', () => {
    render(<Confetti start={text.start} stop={text.stop} more={text.more} />)

    const button = screen.getByRole('button')
    act(() => {
      button.click()
    })

    expect(button).toHaveTextContent(text.stop)
  })

  it('renders more text after rage-clicking', () => {
    render(<Confetti start={text.start} stop={text.stop} more={text.more} />)

    const button = screen.getByRole('button')
    for (let i = 0; i < 12; i++) {
      act(() => {
        button.click()
      })
    }

    expect(button).toHaveTextContent(text.more)
  })
})
