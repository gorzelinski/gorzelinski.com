import path from 'path'
import fs from 'fs/promises'
import { unstable_cache } from 'next/cache'
import { getPlaiceholder } from 'plaiceholder'
import { Pages } from '@/constants'

export async function generatePlaiceholder(
  page: Pages,
  slug: string,
  src: string
) {
  const imagePath = path.normalize(
    path.join(
      process.cwd(),
      process.env.VERCEL_ENV ? '' : 'public/',
      'images/',
      `${page}`,
      `${slug}/`,
      `${src}`
    )
  )
  const image = await fs.readFile(imagePath)
  const { base64 } = await getPlaiceholder(image)

  return base64
}

export const getCachedPlaiceholder = unstable_cache(
  async (page: Pages, slug: string, src: string) =>
    generatePlaiceholder(page, slug, src)
)
