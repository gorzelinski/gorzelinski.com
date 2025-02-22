import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SupportMe } from '../support-me'
import dictionary from '@/dictionaries/en.json'

describe('SupportMe', () => {
  it('renders correctly', () => {
    render(<SupportMe lang={'en'} dictionary={dictionary.section.supportMe} />)

    const heading = screen.getByRole('heading', { name: 'Support me' })
    const paragraph = screen.getByRole('paragraph')
    const link = screen.getByRole('link', { name: 'Buy me a coffee' })

    expect(heading).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })
})
