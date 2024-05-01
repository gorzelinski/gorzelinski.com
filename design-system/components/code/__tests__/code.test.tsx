import { render } from '@testing-library/react'
import { Code } from '../code'

describe('Code', () => {
  it('does not render if there is no code string', () => {
    const { container } = render(<Code codeString="" language="js" />)

    expect(container.firstChild).not.toBeInTheDocument()
  })

  it('renders correctly', () => {
    const { container } = render(
      <Code codeString="const foo = 'bar'" language="js" />
    )

    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders the title if it is passed', () => {
    const { getByText } = render(
      <Code codeString="const foo = 'bar'" language="js" title="Title" />
    )

    expect(getByText('Title')).toBeInTheDocument()
  })

  it('renders the correct language', () => {
    const { getByText } = render(
      <Code codeString="const foo = 'bar'" language="javascript" />
    )

    expect(getByText('JAVASCRIPT')).toBeInTheDocument()
  })

  it('does not render line numbers for the terminal variant', () => {
    const { queryByText } = render(
      <Code codeString="npm install react" language="bash" />
    )

    expect(queryByText('1')).not.toBeInTheDocument()
  })

  it('renders line numbers', () => {
    const { getByText } = render(
      <Code codeString="const foo = 'bar'" language="js" />
    )

    expect(getByText('1')).toBeInTheDocument()
  })

  it('highlights the correct line', () => {
    const { getByText } = render(
      <Code
        codeString={`"const foo = 'bar'
        const bar = 'bas'"`}
        language="js"
        highlight={[2]}
      />
    )

    expect(getByText('2').parentElement).toHaveClass('bg_primary.900')
  })
})
