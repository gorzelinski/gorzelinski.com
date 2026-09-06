import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Details } from '../details'

describe('Details', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the summary', () => {
    render(<Details summary="Summary">Children</Details>)

    expect(screen.getByText('Summary')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(<Details summary="Summary">Children</Details>)

    expect(screen.getByText('Children')).toBeInTheDocument()
  })

  it('renders the chevron', () => {
    render(<Details summary="Summary">Children</Details>)

    expect(screen.getByTestId('chevron-forward')).toBeInTheDocument()
  })

  it('is closed by default', () => {
    render(<Details summary="Summary">Children</Details>)

    expect(screen.getByRole('group')).not.toHaveAttribute('open')
  })

  it('is open when the open prop is passed', () => {
    render(
      <Details summary="Summary" open>
        Children
      </Details>
    )

    expect(screen.getByRole('group')).toHaveAttribute('open')
  })

  it('opens when the summary is clicked', () => {
    render(<Details summary="Summary">Children</Details>)

    fireEvent.click(screen.getByText('Summary'))

    expect(screen.getByRole('group')).toHaveAttribute('open')
  })
})
