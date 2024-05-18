import { render, screen } from '@testing-library/react'
import { Pagination } from '../pagination'

const dictionary = {
  ariaLabel: 'Pagination',
  prev: 'Previous',
  next: 'Next'
}

const prev = {
  title: 'Previous',
  slug: '/prev'
}

const next = {
  title: 'Next',
  slug: '/next'
}

describe('Pagination', () => {
  it('renders correctly', () => {
    render(<Pagination prev={null} next={next} dictionary={dictionary} />)

    const navigation = screen.getByRole('navigation')
    const nextButton = screen.getByRole('link', { name: 'Next' })

    expect(navigation).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it('renders prev button', () => {
    render(<Pagination dictionary={dictionary} prev={prev} next={null} />)

    const prevButton = screen.getByRole('link', { name: 'Previous' })
    const nextButton = screen.queryByRole('link', { name: 'Next' })

    expect(prevButton).toHaveAttribute('href', '/prev')
    expect(prevButton).toHaveAttribute('rel', 'prev')
    expect(nextButton).not.toBeInTheDocument()
  })

  it('renders next button', () => {
    render(<Pagination dictionary={dictionary} prev={null} next={next} />)

    const prevButton = screen.queryByRole('link', { name: 'Previous' })
    const nextButton = screen.getByRole('link', { name: 'Next' })

    expect(nextButton).toHaveAttribute('href', '/next')
    expect(nextButton).toHaveAttribute('rel', 'next')
    expect(prevButton).not.toBeInTheDocument()
  })

  it('renders both buttons', () => {
    render(<Pagination dictionary={dictionary} prev={prev} next={next} />)

    const prevButton = screen.getByRole('link', { name: 'Previous' })
    const nextButton = screen.getByRole('link', { name: 'Next' })

    expect(prevButton).toHaveAttribute('href', '/prev')
    expect(prevButton).toHaveAttribute('rel', 'prev')
    expect(nextButton).toHaveAttribute('href', '/next')
    expect(nextButton).toHaveAttribute('rel', 'next')
  })
})
