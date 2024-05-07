import { render, screen } from '@testing-library/react'
import { Article } from '../article'

describe('Article', () => {
  it('renders correctly', () => {
    render(<Article />)

    const article = screen.getByRole('article')

    expect(article).toBeInTheDocument()
  })
})
