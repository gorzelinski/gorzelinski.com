import type { Post } from '@/types'
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { PostFooter } from '../post-footer'
import { mockAvatar, mockPost } from './post.mock'
import dictionary from '@/dictionaries/en.json'

describe('PostFooter', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(
      <PostFooter
        dictionary={dictionary.component.post}
        frontmatter={mockPost}
        avatar={{
          image: mockAvatar,
          name: 'John Doe',
          bio: 'Software engineer',
          href: '/about'
        }}
      />
    )

    const footer = screen.getByRole('contentinfo')
    const shareLabel = screen.getByText(/Share/i)
    const shareButtons = screen.getAllByRole('link')
    const avatarName = screen.getByText('John Doe')
    const avatarBio = screen.getByText('Software engineer')
    const avatarLink = screen.getByRole('link', { name: 'John Doe' })
    const avatarImage = screen.getByRole('img')

    expect(footer).toBeInTheDocument()
    expect(shareLabel).toBeInTheDocument()
    expect(shareButtons.length).toBeGreaterThan(1)
    expect(avatarName).toBeInTheDocument()
    expect(avatarBio).toBeInTheDocument()
    expect(avatarLink).toHaveAttribute('href', '/about')
    expect(avatarImage).toBeInTheDocument()
  })
})
