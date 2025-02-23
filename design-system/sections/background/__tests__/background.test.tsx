import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Background } from '../background'

describe('Background', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Background data-testid="background" />)

    const background = screen.getByTestId('background')

    expect(background).toBeInTheDocument()
  })
})
