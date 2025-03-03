import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Main } from '../main'

describe('Main', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Main />)

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })
})
