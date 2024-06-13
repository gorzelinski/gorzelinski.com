import { getDictionary } from '../dictionaries'
describe('dictionaries', () => {
  describe('getDictionary()', () => {
    it('returns a dictionary for the English language', async () => {
      const dictionary = await getDictionary('en')

      expect(dictionary).toMatchObject({
        layout: {
          root: {
            metadata: {
              title: 'Matthew Gorzelinski'
            }
          }
        }
      })
    })

    it('returns a dictionary for the Polish language', async () => {
      const dictionary = await getDictionary('pl')

      expect(dictionary).toMatchObject({
        layout: {
          root: {
            metadata: {
              title: 'Mateusz Gorzeliński'
            }
          }
        }
      })
    })
  })
})
