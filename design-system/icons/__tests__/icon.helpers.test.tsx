import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { createIcon } from '../icon.helpers'

const Icon = createIcon(() => <svg />)

describe('createIcon()', () => {
  afterEach(() => {
    cleanup()
  })

  it('hides the icon from assistive technologies', () => {
    render(<Icon data-testid="icon" />)

    expect(screen.getByTestId('icon')).toHaveAttribute('aria-hidden', 'true')
  })

  it('keeps the icon exposed when a label is provided', () => {
    render(<Icon aria-hidden={false} aria-label="Label" role="img" />)

    expect(screen.getByRole('img', { name: 'Label' })).toBeInTheDocument()
  })
})
