import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Code } from '../code'

describe('Code', () => {
  afterEach(() => {
    cleanup()
  })

  it('does not render if there is no code string', async () => {
    render(await Code({ codeString: '', language: 'js' }))

    expect(screen.queryByRole('code')).not.toBeInTheDocument()
  })

  it('renders correctly', async () => {
    render(await Code({ codeString: 'const foo = "bar"', language: 'js' }))

    expect(screen.getByRole('code')).toBeInTheDocument()
  })

  it('renders the title if it is passed', async () => {
    render(
      await Code({
        codeString: 'const foo = "bar"',
        language: 'js',
        title: 'Title'
      })
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('renders the correct language', async () => {
    render(
      await Code({ codeString: 'const foo = "bar"', language: 'javascript' })
    )

    expect(screen.getByText('JAVASCRIPT')).toBeInTheDocument()
    expect(screen.getByRole('code')).not.toHaveClass('terminal')
  })

  it('renders the terminal variant', async () => {
    render(await Code({ codeString: 'npm install react', language: 'bash' }))

    expect(screen.getByRole('code')).toHaveClass('terminal')
  })

  // it('highlights the correct line', async () => {
  //   render(
  //     await Code({
  //       codeString: `"const foo = 'bar'
  //       const bar = 'bas'"`,
  //       language: 'js',
  //       highlight: [2]
  //     })
  //   )

  //   expect(screen.getByText('2').parentElement).toHaveClass('bg_primary.900')
  // })
})
