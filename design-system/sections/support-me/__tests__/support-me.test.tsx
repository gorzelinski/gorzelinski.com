import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import dictionary from '@/dictionaries/en.json'
import { SupportMe } from '../support-me'

describe('SupportMe', () => {
  afterEach(() => {
    cleanup()
  })

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
