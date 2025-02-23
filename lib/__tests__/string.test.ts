import { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'
import { capitalize, getTextFromChildren, slugify } from '../string'

describe('string', () => {
  describe('capitalize()', () => {
    it('capitalizes a letter', () => {
      expect(capitalize('h')).toBe('H')
    })

    it('capitalizes the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello')
    })
  })

  describe('getTextFromChildren()', () => {
    const text = 'hello'
    const textInObject = {
      type: [],
      key: null,
      ref: null,
      props: { children: ' world' },
      _owner: null,
      _store: {}
    } as never as ReactNode

    it('returns a string', () => {
      expect(getTextFromChildren(text)).toBe('hello')
    })

    it('returns a string from an object', () => {
      expect(getTextFromChildren(textInObject)).toBe(' world')
    })

    it('returns a string from an array', () => {
      expect(getTextFromChildren([text])).toBe('hello')
    })

    it('returns a string from an array of objects', () => {
      expect(getTextFromChildren([textInObject])).toBe(' world')
    })

    it('returns a string from an array of objects and strings', () => {
      expect(getTextFromChildren([text, textInObject])).toBe('hello world')
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
