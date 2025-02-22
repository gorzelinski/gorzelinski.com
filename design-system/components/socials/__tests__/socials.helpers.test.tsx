import { describe, it, expect } from 'vitest'
import { createShareLinks } from '../socials.helpers'

describe('createShareLinks()', () => {
  it('returns the correct share links', () => {
    const url = 'https://example.com'
    const title = 'Example Title'

    const shareLinks = createShareLinks(url, title, [
      { name: 'Twitter', icon: <svg />, url: '' },
      { name: 'Facebook', icon: <svg />, url: '' },
      { name: 'Email', icon: <svg />, url: '' }
    ])

    shareLinks.forEach((shareLink) => {
      expect(shareLink).toHaveProperty('name')
      expect(shareLink).toHaveProperty('icon')
      expect(shareLink).toHaveProperty('url')
      expect(shareLink.url).toContain(encodeURIComponent(url))
      expect(shareLink.url).toContain(encodeURIComponent(title))
    })
  })
})
