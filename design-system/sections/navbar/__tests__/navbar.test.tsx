import { render, screen } from '@testing-library/react'
import { getDictionary } from '@/lib/dictionaries'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { Navbar } from '../navbar'

jest.mock('next/navigation', () => ({
  usePathname: () => '/'
}))

jest.mock('../../../../hooks', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: jest.fn()
  }),
  useScrollDirection: jest.fn(),
  useScrollProgress: jest.fn()
}))

const useScrollDirectionMock = jest.mocked(useScrollDirection)
const useScrollProgressMock = jest.mocked(useScrollProgress)

describe('Navbar', () => {
  it('renders correctly', async () => {
    const dictionary = await getDictionary('en')

    useScrollDirectionMock.mockReturnValue('up')
    useScrollProgressMock.mockReturnValue(50)

    render(<Navbar lang="en" dictionary={dictionary} />)

    const nav = screen.getAllByRole('navigation')
    const logo = screen.getByText('Matthew Gorzelinski')
    const themeSwitch = screen.getByRole('button', { name: 'Change theme' })
    const blog = screen.getByText('Blog')
    const about = screen.getByText('About')
    const portfolio = screen.getByText('Portfolio')
    const contact = screen.getByText('Contact')

    expect(nav).toHaveLength(2)
    expect(logo).toHaveAttribute('href', '/')
    expect(themeSwitch).toBeInTheDocument()
    expect(blog).toHaveAttribute('href', '/blog')
    expect(about).toHaveAttribute('href', '/about')
    expect(portfolio).toHaveAttribute('href', '/portfolio')
    expect(contact).toHaveAttribute('href', '#contact')
  })

  it('hides the navbar when scrolling down', async () => {
    const dictionary = await getDictionary('en')

    useScrollDirectionMock.mockReturnValue('down')
    useScrollProgressMock.mockReturnValue(10)

    render(<Navbar lang="en" dictionary={dictionary} />)

    const navbar = screen.getByRole('banner')

    expect(navbar).toHaveClass('opacity_0')
  })

  it('hides the border when progress is less than 1', async () => {
    const dictionary = await getDictionary('en')

    useScrollDirectionMock.mockReturnValue('up')
    useScrollProgressMock.mockReturnValue(0)

    render(<Navbar lang="en" dictionary={dictionary} />)

    const navbar = screen.getByRole('banner')

    expect(navbar).toHaveClass('border_transparent')
  })

  it('shows the border when progress is greater than 1', async () => {
    const dictionary = await getDictionary('en')

    useScrollDirectionMock.mockReturnValue('up')
    useScrollProgressMock.mockReturnValue(2)

    render(<Navbar lang="en" dictionary={dictionary} />)

    const navbar = screen.getByRole('banner')

    expect(navbar).toHaveClass('border-b_gray.subtle')
  })

  it('makes padding standard when progress is less than 1', async () => {
    const dictionary = await getDictionary('en')

    useScrollDirectionMock.mockReturnValue('up')
    useScrollProgressMock.mockReturnValue(0)

    render(<Navbar lang="en" dictionary={dictionary} />)

    const navbar = screen.getByRole('banner')

    expect(navbar).toHaveClass('md:p_xl')
  })

  it('makes padding compact when progress is greater than 1', async () => {
    const dictionary = await getDictionary('en')

    useScrollDirectionMock.mockReturnValue('up')
    useScrollProgressMock.mockReturnValue(2)

    render(<Navbar lang="en" dictionary={dictionary} />)

    const navbar = screen.getByRole('banner')

    expect(navbar).toHaveClass('py_m')
  })
})
