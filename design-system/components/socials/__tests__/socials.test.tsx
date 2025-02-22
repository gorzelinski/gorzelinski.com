import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { metadataBase } from '@/constants'
import { Socials } from '../socials'

describe('Socials', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders social media links', () => {
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

    const socialLinks = screen.getAllByRole('link')

    expect(socialLinks.length).toEqual(3)
    socialLinks.forEach((social) => {
      expect(social).toHaveAttribute('href')
      expect(social).toHaveAttribute('aria-label')
      expect(social).toHaveAttribute('title')
      expect(social).toHaveAttribute('target', '_blank')
      expect(social).toContainHTML('svg')
    })
  })

  it('renders social share links', () => {
    render(<Socials title="Hello, World!" />)

    const socialLinks = screen.getAllByRole('link')

    expect(socialLinks.length).toBeGreaterThanOrEqual(5)
    socialLinks.forEach((social) => {
      expect(social).toHaveAttribute(
        'href',
        expect.stringContaining(encodeURIComponent(metadataBase.href))
      )
    })
  })
})
