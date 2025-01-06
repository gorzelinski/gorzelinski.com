import { capitalize, slugify } from '../string'

describe('string', () => {
  describe('capitalize()', () => {
    it('capitalizes a letter', () => {
      expect(capitalize('h')).toBe('H')
    })

    it('capitalizes the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello')
    })
  })

  describe('slugify()', () => {
    it('converts a word to a slug', () => {
      expect(slugify('hello')).toBe('hello')
    })

    it('converts a word (with spaces) to a slug', () => {
      expect(slugify(' hello  ')).toBe('hello')
    })

    it('converts a word (with a dot) to a slug', () => {
      expect(slugify('hello.')).toBe('hello')
    })

    it('converts a word (with punctuation marks) to a slug', () => {
      expect(slugify('hello,')).toBe('hello')
      expect(slugify('"hello"')).toBe('hello')
      expect(slugify('(hello)')).toBe('hello')
      expect(slugify('hello!')).toBe('hello')
      expect(slugify('hello?')).toBe('hello')
    })

    it('converts a word (with a hyphen) to a slug', () => {
      expect(slugify('hello-')).toBe('hello')
    })

    it('converts a string to a slug', () => {
      expect(slugify('hello world')).toBe('hello-world')
    })

    it('converts a string (with spaces) to a slug', () => {
      expect(slugify(' hello  world  ')).toBe('hello-world')
    })

    it('converts a string (with a dot) to a slug', () => {
      expect(slugify('Hello world.')).toBe('hello-world')
      expect(slugify('Hello World.js')).toBe('hello-world-js')
      expect(slugify('Hello vs. World')).toBe('hello-vs-world')
    })

    it('converts a string (with punctuation marks) to a slug', () => {
      expect(slugify('Hello, World!')).toBe('hello-world')
      expect(slugify('Hello, World?')).toBe('hello-world')
      expect(slugify('(Hello) World')).toBe('hello-world')
      expect(slugify('"Hello World"')).toBe('hello-world')
    })

    it('converts a string (with a hyphen) to a slug', () => {
      expect(slugify('Hello-World')).toBe('hello-world')
      expect(slugify('Hello - World')).toBe('hello-world')
    })

    it('converts a string (with an emoji) to a slug', () => {
      expect(slugify('Hello world 👋')).toBe('hello-world')
    })

    it('converts a string (with polish diacritics) to a slug', () => {
      expect(slugify('Zażółć gęślą jaźń')).toBe('zazolc-gesla-jazn')
      expect(slugify('ZAŻÓŁĆ GĘŚLĄ JAŹŃ')).toBe('zazolc-gesla-jazn')
    })
  })
})
