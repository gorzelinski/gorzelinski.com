import fs from 'fs'
import { METAFONT } from '@/constants'
import { MetaFontOptions } from '@/types'

export async function getMetaFont(
  file: string,
  options?: Pick<MetaFontOptions, 'style' | 'weight'>
) {
  const font = await fs.promises.readFile(
    new URL(`../public/fonts/${file}`, import.meta.url)
  )

  return {
    ...options,
    ...METAFONT,
    data: font
  } as MetaFontOptions
}
