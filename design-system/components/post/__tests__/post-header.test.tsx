import type { Post } from '@/types'
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { PostHeader } from '../post-header'
import { mockPost } from './post.mock'
import dictionary from '@/dictionaries/en.json'

describe('PostHeader', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(
      <PostHeader
        lang="en"
        slug="test-post/"
        dictionary={dictionary.component.post}
        frontmatter={mockPost}
      />
    )

    const header = screen.getByRole('banner')
    const heading = screen.getByRole('heading', { level: 1 })
    const description = screen.getByText('Test post description')
    const date = screen.getByText('January 1, 2024')
    const readingTime = screen.getByText('5 min read')
    const updatedLabel = screen.getByText(/Last updated:/)
    const image = screen.getByRole('img')
    const caption = screen.getByText('Test image caption')

    expect(header).toBeInTheDocument()
    expect(heading).toHaveTextContent('Test Post Title')
    expect(description).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(readingTime).toBeInTheDocument()
    expect(updatedLabel).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'Test image')
    expect(image).toHaveAttribute('src', expect.stringContaining('test-image.png'))
    expect(caption).toBeInTheDocument()
  })
})
