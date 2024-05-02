import { render, screen } from '@testing-library/react'
import { getDictionary } from '@/lib/dictionaries'
import { Newsletter } from '../newsletter'

describe('Newsletter', () => {
  it('renders correctly', async () => {
    const {
      component: { newsletter }
    } = await getDictionary('en')

    render(<Newsletter dictionary={newsletter} />)

    const heading = screen.getByRole('heading', { level: 2 })
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    expect(heading).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
