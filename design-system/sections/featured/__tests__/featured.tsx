import { render, screen } from '@testing-library/react'
import { Featured } from '../featured'

describe('Featured', () => {
  it('renders correctly', () => {
    render(
      <Featured heading="Heading" link={{ href: '/link', text: 'Link' }}>
        Children
      </Featured>
    )

    const heading = screen.getByRole('heading', { level: 2 })
    const link = screen.getByRole('link')
    const text = screen.getByText('Children')

    expect(heading).toHaveTextContent('Heading')
    expect(link).toHaveTextContent('Link')
    expect(link).toHaveAttribute('href', '/link')
    expect(text).toBeInTheDocument()
  })
})
