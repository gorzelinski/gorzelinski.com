import { render, screen } from '@testing-library/react'
import { Socials } from '../socials'

describe('Socials', () => {
  it('renders correctly', () => {
    render(
      <Socials
        socials={[
          { name: 'Twitter', icon: <svg />, url: 'https://twitter.com/' },
          { name: 'Facebook', icon: <svg />, url: 'https://www.facebook.com/' },
          {
            name: 'Instagram',
            icon: <svg />,
            url: 'https://www.instagram.com/'
          }
        ]}
      />
    )

    const socials = screen.getAllByRole('link')

    expect(socials.length).toEqual(3)
    socials.forEach((social) => {
      expect(social).toHaveAttribute('href')
      expect(social).toHaveAttribute('aria-label')
      expect(social).toHaveAttribute('title')
      expect(social).toHaveAttribute('target', '_blank')
      expect(social).toContainHTML('svg')
    })
  })
})
