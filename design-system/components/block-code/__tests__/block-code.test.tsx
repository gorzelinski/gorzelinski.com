import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { BlockCode } from '../block-code'

describe('BlockCode', () => {
  afterEach(() => {
    cleanup()
  })

  it('does not render if there is no code string', async () => {
    render(await BlockCode({ codeString: '', language: 'js' }))

    expect(screen.queryByRole('code')).not.toBeInTheDocument()
  })

  it('renders correctly', async () => {
    render(await BlockCode({ codeString: 'const foo = "bar"', language: 'js' }))

    expect(screen.getByRole('code')).toBeInTheDocument()
  })

  it('renders the title if it is passed', async () => {
    render(
      await BlockCode({
        codeString: 'const foo = "bar"',
        language: 'js',
        title: 'Title'
      })
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('renders the correct language', async () => {
    render(
      await BlockCode({
        codeString: 'const foo = "bar"',
        language: 'javascript'
      })
    )

    expect(screen.getByText('JAVASCRIPT')).toBeInTheDocument()
    expect(screen.getByRole('code')).not.toHaveClass('terminal')
  })

  it('renders the terminal variant', async () => {
    render(
      await BlockCode({ codeString: 'npm install react', language: 'bash' })
    )

    expect(screen.getByRole('code')).toHaveClass('terminal')
  })

  it('highlights the correct line', async () => {
    render(
      await BlockCode({
        codeString: `"const foo = 'line 1'
        const bar = 'line 2'"`,
        language: 'js',
        highlight: '{2}'
      })
    )

    const line1 = screen.getByText('line 1', { exact: false }).parentElement
    const line2 = screen.getByText('line 2', { exact: false }).parentElement

    expect(line1).not.toHaveClass('highlighted')
    expect(line2).toHaveClass('highlighted')
  })

  it('highlights the correct lines (range)', async () => {
    render(
      await BlockCode({
        codeString: `"const foo = 'line 1'
        const bar = 'line 2'
        const baz = 'line 3'"`,
        language: 'js',
        highlight: '{2-3}'
      })
    )

    const line1 = screen.getByText('line 1', { exact: false }).parentElement
    const line2 = screen.getByText('line 2', { exact: false }).parentElement
    const line3 = screen.getByText('line 3', { exact: false }).parentElement

    expect(line1).not.toHaveClass('highlighted')
    expect(line2).toHaveClass('highlighted')
    expect(line3).toHaveClass('highlighted')
  })

  it('highlights the correct lines (multiple)', async () => {
    render(
      await BlockCode({
        codeString: `"const foo = 'line 1'
        const bar = 'line 2'
        const baz = 'line 3'"`,
        language: 'js',
        highlight: '{1,3}'
      })
    )

    const line1 = screen.getByText('line 1', { exact: false }).parentElement
    const line2 = screen.getByText('line 2', { exact: false }).parentElement
    const line3 = screen.getByText('line 3', { exact: false }).parentElement

    expect(line1).toHaveClass('highlighted')
    expect(line2).not.toHaveClass('highlighted')
    expect(line3).toHaveClass('highlighted')
  })

  it('highlights the correct lines (multiple ranges)', async () => {
    render(
      await BlockCode({
        codeString: `"const foo = 'line 1'
        const bar = 'line 2'
        const baz = 'line 3'
        const qux = 'line 4'
        const quux = 'line 5'"`,
        language: 'js',
        highlight: '{1-2,4-5}'
      })
    )

    const line1 = screen.getByText('line 1', { exact: false }).parentElement
    const line2 = screen.getByText('line 2', { exact: false }).parentElement
    const line3 = screen.getByText('line 3', { exact: false }).parentElement
    const line4 = screen.getByText('line 4', { exact: false }).parentElement
    const line5 = screen.getByText('line 5', { exact: false }).parentElement

    expect(line1).toHaveClass('highlighted')
    expect(line2).toHaveClass('highlighted')
    expect(line3).not.toHaveClass('highlighted')
    expect(line4).toHaveClass('highlighted')
    expect(line5).toHaveClass('highlighted')
  })
})
