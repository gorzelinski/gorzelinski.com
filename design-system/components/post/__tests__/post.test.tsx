import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Post } from '../post'
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
        image={{
          src: 'image.png',
          alt: 'Alt text'
        }}
        title="Title"
        description="Description"
        date={new Date('2024-01-01')}
        readingTime={{ minutes: 1, text: '1 min read', time: 1, words: 200 }}
      />
    )

    const post = screen.getByRole('article')
    const image = screen.getByRole('img')
    const date = screen.getByText('January 1, 2024 • 1 min read')
    const title = screen.getByRole('heading', { level: 3 })
    const description = screen.getByText('Description')
    const button = screen.getByRole('link')

    expect(post).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toHaveAttribute('href', 'post/')
  })
})
