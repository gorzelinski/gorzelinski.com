import { render, screen } from '@testing-library/react'
import { Newsletter } from '../newsletter'

const dictionary = {
  heading: 'A newsletter that sparks curiosity💡',
  description: 'Subscribe to my newsletter and get a monthly dose of:',
  topics: [
    'Front-end, web development, and design news, examples, inspiration',
    'Science theories and skepticism',
    'My favorite resources, ideas, tools, and other interesting links'
  ],
  footnote:
    'I am not a Nigerian prince to offer you opportunities. I do not send spam. Unsubscribe anytime.',
  email: 'Your email',
  button: 'Subscribe',
  success: {
    heading: 'Thank you for signing up!',
    description:
      "If you don't receive a confirmation email shortly, double check different email folders."
  },
  quarantined: {
    heading: 'Almost there!',
    description:
      'Confirm you are not a robot, and your email will be on its way.'
  },
  error: {
    heading: 'Something went wrong',
    description:
      'There was an issue trying to submit. Check your email and try again.'
  }
}

describe('Newsletter', () => {
  it('renders correctly', async () => {
    render(<Newsletter dictionary={dictionary} />)

    const heading = screen.getByRole('heading', { level: 2 })
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    expect(heading).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
