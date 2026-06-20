import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import dictionary from '@/dictionaries/en.json'
import { Post } from '../post'
import { mockPost } from './post.mock'

describe('Post', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(
      <Post
        lang="en"
        dictionary={dictionary.component.post}
        frontmatter={mockPost}
      />
    )

    const post = screen.getByRole('article')
    const image = screen.getByRole('img')
    const date = screen.getByText('January 1, 2024')
    const readingTime = screen.getByText('5 min read')
    const title = screen.getByRole('heading', { level: 3 })
    const description = screen.getByText('Test post description')
    const button = screen.getByRole('link')

    expect(post).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(readingTime).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toHaveAttribute('href', mockPost.slug)
  })
})
