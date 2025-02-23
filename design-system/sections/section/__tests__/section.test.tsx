import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Section } from '../section'

describe('Section', () => {
  afterEach(() => {
    cleanup()
  })

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
