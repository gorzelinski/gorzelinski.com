import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Avatar } from '../avatar'

describe('Avatar', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(
      <Avatar
        image={{
          src: '/_next/static/media/logo.691d1d29.png',
          height: 512,
          width: 512,
          blurDataURL:
            '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.691d1d29.png&w=8&q=70',
          blurWidth: 8,
          blurHeight: 8
        }}
        name="John Doe"
        bio="Frontend Developer"
        href="/john-doe"
      />
    )

    const image = screen.getByRole('img')
    const name = screen.getByText('John Doe')
    const bio = screen.getByText('Frontend Developer')
    const link = screen.getByRole('link')

    expect(image).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(bio).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/john-doe')
  })
})
