import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { METAFONT } from '@/constants'
import { MetaFontOptions } from '@/types'

export async function getMetaFont(
  slug: string,
  options?: Pick<MetaFontOptions, 'style' | 'weight'>
) {
  const font = await fs.promises.readFile(
    path.join(fileURLToPath(import.meta.url), slug)
  )

  return {
    ...options,
    ...METAFONT,
    data: font
  } as MetaFontOptions
}
