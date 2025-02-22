import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Pagination } from '../pagination'
import dictionary from '@/dictionaries/en.json'

const prev = {
  title: 'Previous',
  slug: '/prev'
}

const next = {
  title: 'Next',
  slug: '/next'
}

describe('Pagination', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(
      <Pagination
        prev={null}
        next={next}
        dictionary={dictionary.component.pagination}
      />
    )

    const navigation = screen.getByRole('navigation')
    const nextButton = screen.getByRole('link', { name: 'Next' })

    expect(navigation).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it('renders prev button', () => {
    render(
      <Pagination
        dictionary={dictionary.component.pagination}
        prev={prev}
        next={null}
      />
    )

    const prevButton = screen.getByRole('link', { name: 'Previous' })
    const nextButton = screen.queryByRole('link', { name: 'Next' })

    expect(prevButton).toHaveAttribute('href', '/prev')
    expect(prevButton).toHaveAttribute('rel', 'prev')
    expect(nextButton).not.toBeInTheDocument()
  })

  it('renders next button', () => {
    render(
      <Pagination
        dictionary={dictionary.component.pagination}
        prev={null}
        next={next}
      />
    )

    const prevButton = screen.queryByRole('link', { name: 'Previous' })
    const nextButton = screen.getByRole('link', { name: 'Next' })

    expect(nextButton).toHaveAttribute('href', '/next')
    expect(nextButton).toHaveAttribute('rel', 'next')
    expect(prevButton).not.toBeInTheDocument()
  })

  it('renders both buttons', () => {
    render(
      <Pagination
        dictionary={dictionary.component.pagination}
        prev={prev}
        next={next}
      />
    )

    const prevButton = screen.getByRole('link', { name: 'Previous' })
    const nextButton = screen.getByRole('link', { name: 'Next' })

    expect(prevButton).toHaveAttribute('href', '/prev')
    expect(prevButton).toHaveAttribute('rel', 'prev')
    expect(nextButton).toHaveAttribute('href', '/next')
    expect(nextButton).toHaveAttribute('rel', 'next')
  })
})
