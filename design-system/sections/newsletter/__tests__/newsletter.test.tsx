import { render, screen } from '@testing-library/react'
import { Newsletter } from '../newsletter'
import dictionary from '@/dictionaries/en.json'

describe('Newsletter', () => {
  it('renders correctly', async () => {
    render(<Newsletter lang="en" dictionary={dictionary.section.newsletter} />)

    const heading = screen.getByRole('heading', { level: 2 })
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    expect(heading).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
