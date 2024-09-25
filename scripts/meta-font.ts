import fs from 'fs/promises'
import { METAFONT } from '@/constants'
import { MetaFontOptions } from '@/types'

export async function getMetaFont(
  file: string,
  options?: Pick<MetaFontOptions, 'style' | 'weight'>
) {
  const font = await fs.readFile(process.cwd() + `/assets/fonts/${file}`)

  return {
    ...options,
    ...METAFONT,
    data: font
  } as MetaFontOptions
}
