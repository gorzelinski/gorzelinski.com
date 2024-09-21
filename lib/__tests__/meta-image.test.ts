import { getMetaImage } from '../meta-image'

describe('meta-image', () => {
  describe('getMetaImage()', () => {
    it('returns OpenGraph meta image', () => {
      const metaImage = getMetaImage('og', 'en', {
        alt: 'alt',
        title: 'title',
        subtitle: 'subtitle',
        backgroundURL: 'backgroundURL'
      })

      expect(metaImage).toEqual({
        url: '/en/api/og/?title=title&subtitle=subtitle&backgroundURL=backgroundURL',
        alt: 'alt',
        type: 'image/png',
        width: 1200,
        height: 630
      })
    })

    it('returns Twitter meta image', () => {
      const metaImage = getMetaImage('twitter', 'pl', {
        alt: 'alt',
        title: 'title',
        subtitle: 'subtitle'
      })

      expect(metaImage).toEqual({
        url: '/pl/api/twitter/?title=title&subtitle=subtitle',
        alt: 'alt',
        type: 'image/png',
        width: 1200,
        height: 600
      })
    })
  })
})
