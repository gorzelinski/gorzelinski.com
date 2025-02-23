import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Code } from '../code'

describe('Code', () => {
  afterEach(() => {
    cleanup()
  })

  it('does not render if there is no code string', () => {
    render(<Code codeString="" language="js" />)

    expect(screen.queryByRole('code')).not.toBeInTheDocument()
  })

  it('renders correctly', () => {
    render(<Code codeString="const foo = 'bar'" language="js" />)

    expect(screen.getByRole('code')).toBeInTheDocument()
  })

  it('renders the title if it is passed', () => {
    render(<Code codeString="const foo = 'bar'" language="js" title="Title" />)

    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('renders the correct language', () => {
    render(<Code codeString="const foo = 'bar'" language="javascript" />)

    expect(screen.getByText('JAVASCRIPT')).toBeInTheDocument()
  })

  it('does not render line numbers for the terminal variant', () => {
    render(<Code codeString="npm install react" language="bash" />)

    expect(screen.queryByText('1')).not.toBeInTheDocument()
  })

  it('renders line numbers', () => {
    render(<Code codeString="const foo = 'bar'" language="js" />)

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('highlights the correct line', () => {
    render(
      <Code
        codeString={`"const foo = 'bar'
        const bar = 'bas'"`}
        language="js"
        highlight={[2]}
      />
    )

    expect(screen.getByText('2').parentElement).toHaveClass('bg_primary.900')
  })
})
