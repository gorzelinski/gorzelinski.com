import { render, screen } from '@testing-library/react'
import { getDictionary } from '@/lib/dictionaries'
import { Footer } from '../footer'

jest.mock('next/navigation', () => ({
  usePathname: () => '/'
}))

describe('Footer', () => {
  it('renders correctly', async () => {
    const dictionary = await getDictionary('en')

    render(<Footer lang="en" dictionary={dictionary} />)

    const email = screen.getByText('hello@gorzelinski.com')
    const twitter = screen.getByTitle('Twitter')
    const english = screen.getByText('English')
    const polish = screen.getByText('Polski')
    const home = screen.getByText('Home')
    const blog = screen.getByText('Blog')
    const about = screen.getByText('About')
    const portfolio = screen.getByText('Portfolio')
    const newsletter = screen.getByText('Newsletter')
    const rss = screen.getByText('RSS')

    expect(email).toHaveAttribute('href', 'mailto:hello@gorzelinski.com')
    expect(twitter).toHaveAttribute('href', 'https://twitter.com/gorzelinski')
    expect(english).toBeInTheDocument()
    expect(polish).toBeInTheDocument()
    expect(home).toHaveAttribute('href', '/')
    expect(blog).toHaveAttribute('href', '/blog')
    expect(about).toHaveAttribute('href', '/about')
    expect(portfolio).toHaveAttribute('href', '/portfolio')
    expect(newsletter).toHaveAttribute('href', '/#newsletter')
    expect(rss).toHaveAttribute('href', '/rss.xml')
  })
})
