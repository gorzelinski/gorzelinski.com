import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import { Confetti } from '../confetti'
import dictionary from '@/dictionaries/en.json'

vi.mock('react-confetti', () => ({
  default: () => null
}))

describe('Confetti', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    render(
      <Confetti
        start={dictionary.component.confetti.start}
        stop={dictionary.component.confetti.stop}
        more={dictionary.component.confetti.more}
      />
    )

    const button = screen.getByRole('button')

    expect(button).toBeVisible()
    expect(button).toHaveTextContent(dictionary.component.confetti.start)
  })

  it('renders stop text after click', () => {
    render(
      <Confetti
        start={dictionary.component.confetti.start}
        stop={dictionary.component.confetti.stop}
        more={dictionary.component.confetti.more}
      />
    )

    const button = screen.getByRole('button')
    act(() => {
      button.click()
    })

    expect(button).toHaveTextContent(dictionary.component.confetti.stop)
  })

  it('renders more text after rage-clicking', () => {
    render(
      <Confetti
        start={dictionary.component.confetti.start}
        stop={dictionary.component.confetti.stop}
        more={dictionary.component.confetti.more}
      />
    )

    const button = screen.getByRole('button')
    for (let i = 0; i < 12; i++) {
      act(() => {
        button.click()
      })
    }

    expect(button).toHaveTextContent(dictionary.component.confetti.more)
  })
})
