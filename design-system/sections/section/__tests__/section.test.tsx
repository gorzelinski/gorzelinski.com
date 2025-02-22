import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Section } from '../section'

describe('Section', () => {
  it('renders correctly', () => {
    render(
      <Section aria-labelledby="blog">
        <h2 id="blog">Blog</h2>
      </Section>
    )

    const section = screen.getByRole('region', { name: 'Blog' })

    expect(section).toBeInTheDocument()
  })
})
