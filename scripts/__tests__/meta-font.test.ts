import { describe, expect, it, vi, beforeEach } from 'vitest'
import fs from 'fs/promises'
import { getMetaFont } from '../meta-font'

vi.mock('fs/promises', () => ({
  default: {
    readFile: vi.fn()
  }
}))

vi.mock('@/constants', () => ({
  METAFONT: {
    name: 'Montserrat',
    style: 'normal'
  }
}))

describe('meta-font', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(process, 'cwd').mockReturnValue('/test/project')
  })

  describe('getMetaFont()', () => {
    it('reads font file and returns MetaFontOptions with default values', async () => {
      const mockFontData = Buffer.from('mock font data')
      vi.mocked(fs.readFile).mockResolvedValue(mockFontData)

      const result = await getMetaFont('Montserrat-Medium.ttf')

      expect(fs.readFile).toHaveBeenCalledWith(
        '/test/project/assets/fonts/Montserrat-Medium.ttf'
      )
      expect(result).toEqual({
        name: 'Montserrat',
        style: 'normal',
        data: mockFontData
      })
    })

    it('reads font file and merges with provided options (options override METAFONT)', async () => {
      const mockFontData = Buffer.from('mock font data')
      vi.mocked(fs.readFile).mockResolvedValue(mockFontData)

      const options = {
        style: 'italic' as const,
        weight: 600 as const
      }

      const result = await getMetaFont('Montserrat-SemiBold.ttf', options)

      expect(fs.readFile).toHaveBeenCalledWith(
        '/test/project/assets/fonts/Montserrat-SemiBold.ttf'
      )
      expect(result).toEqual({
        name: 'Montserrat',
        style: 'italic',
        weight: 600,
        data: mockFontData
      })
    })

    it('handles different font file names correctly', async () => {
      const mockFontData = Buffer.from('different font data')
      vi.mocked(fs.readFile).mockResolvedValue(mockFontData)

      await getMetaFont('custom-font.woff2')

      expect(fs.readFile).toHaveBeenCalledWith(
        '/test/project/assets/fonts/custom-font.woff2'
      )
    })

    it('handles all valid weight values', async () => {
      const mockFontData = Buffer.from('mock font data')
      vi.mocked(fs.readFile).mockResolvedValue(mockFontData)

      const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const

      for (const weight of weights) {
        const result = await getMetaFont('test.ttf', { weight })
        expect(result.weight).toBe(weight)
      }
    })

    it('throws error when file reading fails', async () => {
      const error = new Error('File not found')
      vi.mocked(fs.readFile).mockRejectedValue(error)

      await expect(getMetaFont('nonexistent.ttf')).rejects.toThrow(
        'File not found'
      )
    })

    it('returns correct data type structure', async () => {
      const mockFontData = Buffer.from('mock font data')
      vi.mocked(fs.readFile).mockResolvedValue(mockFontData)

      const result = await getMetaFont('test.ttf', {
        style: 'italic',
        weight: 700
      })

      expect(result).toHaveProperty('data')
      expect(result).toHaveProperty('name')
      expect(result).toHaveProperty('style')
      expect(result).toHaveProperty('weight')
      expect(typeof result.name).toBe('string')
      expect(typeof result.style).toBe('string')
      expect(typeof result.weight).toBe('number')
    })
  })
})
