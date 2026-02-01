import type { MetaFontOptions } from '@/types'
import fs from 'fs/promises'
import { METAFONT } from '@/constants'

export async function getMetaFont(
  file: string,
  options?: Pick<MetaFontOptions, 'style' | 'weight'>
) {
  const font = await fs.readFile(process.cwd() + `/assets/fonts/${file}`)

  return {
    ...METAFONT,
    ...options,
    data: font
  } as unknown as MetaFontOptions
}
