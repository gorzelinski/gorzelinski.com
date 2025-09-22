import { describe, expect, it, vi } from 'vitest'
import { getDictionary } from '../dictionaries'

vi.mock('../dictionaries/en.json', () => ({
  default: {
    links: {
      home: 'Home',
      portfolio: 'Portfolio',
      about: 'About',
      uses: 'Uses',
      blog: 'Blog',
      contact: 'Contact',
      newsletter: 'Newsletter',
      rss: 'RSS',
      coffee: 'Buy me a coffee'
    },
    component: {
      avatar: {
        name: 'Matthew Gorzelinski',
        bio: 'Software engineer with polymath aspirations.'
      },
      pagination: {
        ariaLabel: 'Pagination',
        prev: 'Previous',
        next: 'Next'
      }
    }
  }
}))

vi.mock('../dictionaries/pl.json', () => ({
  default: {
    links: {
      home: 'Główna',
      portfolio: 'Portfolio',
      about: 'O mnie',
      uses: 'Używa',
      blog: 'Blog',
      contact: 'Kontakt',
      newsletter: 'Newsletter',
      rss: 'RSS',
      coffee: 'Postaw mi kawę'
    },
    component: {
      avatar: {
        name: 'Mateusz Gorzeliński',
        bio: 'Inżynier oprogramowania o erudycyjnych aspiracjach.'
      },
      pagination: {
        ariaLabel: 'Paginacja',
        prev: 'Poprzedni',
        next: 'Następny'
      }
    }
  }
}))

describe('dictionaries', () => {
  describe('getDictionary()', () => {
    it('returns English dictionary for en locale', async () => {
      const dictionary = await getDictionary('en')

      expect(dictionary.links.home).toBe('Home')
      expect(dictionary.links.about).toBe('About')
      expect(dictionary.links.blog).toBe('Blog')
      expect(dictionary.links.portfolio).toBe('Portfolio')
      expect(dictionary.links.uses).toBe('Uses')
      expect(dictionary.component.avatar.name).toBe('Matthew Gorzelinski')
      expect(dictionary.component.pagination.prev).toBe('Previous')
    })

    it('returns Polish dictionary for pl locale', async () => {
      const dictionary = await getDictionary('pl')

      expect(dictionary.links.home).toBe('Główna')
      expect(dictionary.links.about).toBe('O mnie')
      expect(dictionary.links.blog).toBe('Blog')
      expect(dictionary.links.portfolio).toBe('Portfolio')
      expect(dictionary.links.uses).toBe('Używa')
      expect(dictionary.component.avatar.name).toBe('Mateusz Gorzeliński')
      expect(dictionary.component.pagination.prev).toBe('Poprzedni')
    })
  })
})
