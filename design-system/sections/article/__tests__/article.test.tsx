import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Article } from '../article'

describe('Article', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Article />)

    const article = screen.getByRole('article')

    expect(article).toBeInTheDocument()
  })
})
