import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Post } from '../post'
import { mockPost } from './post.mock'
import dictionary from '@/dictionaries/en.json'

describe('Post', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(
      <Post
        lang="en"
        slug="post/"
        dictionary={dictionary.component.post}
        image={mockPost.image}
        title={mockPost.title}
        description={mockPost.description}
        date={mockPost.date}
        readingTime={mockPost.readingTime}
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
    expect(button).toHaveAttribute('href', 'post/')
  })
})
