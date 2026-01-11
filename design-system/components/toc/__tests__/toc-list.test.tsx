import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { TocList } from '../toc-list'
import { createHeading } from './toc-element.test'

describe('TocList', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders a flat list of links', () => {
    const h2 = createHeading('h2', 'heading-1', 'Heading 1')
    const h2b = createHeading('h2', 'heading-2', 'Heading 2')

    render(
      <TocList
        activeID={null}
        nodes={[
          { heading: h2, children: [] },
          { heading: h2b, children: [] }
        ]}
      />
    )

    expect(screen.getByRole('link', { name: 'Heading 1' })).toHaveAttribute(
      'href',
      '#heading-1'
    )
    expect(screen.getByRole('link', { name: 'Heading 2' })).toHaveAttribute(
      'href',
      '#heading-2'
    )
  })

  it('renders nested lists under the correct parent', () => {
    const h2 = createHeading('h2', 'heading-1', 'Heading 1')
    const h3 = createHeading('h3', 'heading-2', 'Heading 2')
    const h4 = createHeading('h4', 'heading-3', 'Heading 3')

    render(
      <TocList
        activeID={null}
        nodes={[
          {
            heading: h2,
            children: [
              {
                heading: h3,
                children: [{ heading: h4, children: [] }]
              }
            ]
          }
        ]}
      />
    )

    const h2Link = screen.getByRole('link', { name: 'Heading 1' })
    const h2Li = h2Link.closest('li')
    const nestedList = h2Li?.querySelector('ol')

    expect(nestedList).not.toBeNull()
    expect(nestedList?.querySelector('a[href="#heading-2"]')).not.toBeNull()
    expect(nestedList?.querySelector('ol a[href="#heading-3"]')).not.toBeNull()
  })

  it('marks the active heading link', () => {
    const h2 = createHeading('h2', 'heading-1', 'Heading 1')
    const h3 = createHeading('h3', 'heading-2', 'Heading 2')

    render(
      <TocList
        activeID="heading-2"
        nodes={[
          {
            heading: h2,
            children: [{ heading: h3, children: [] }]
          }
        ]}
      />
    )

    const activeLink = screen.getByRole('link', { name: 'Heading 2' })
    const inactiveLink = screen.getByRole('link', { name: 'Heading 1' })

    expect(activeLink).toHaveClass('active-subtle')
    expect(inactiveLink).not.toHaveClass('active-subtle')
  })
})
