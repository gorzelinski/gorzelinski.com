import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { METAFONT } from '@/constants'
import { MetaFontOptions } from '@/types'

// Use it in the 'nodejs' runtime
export async function getMetaFont() {
  const font = await fs.promises.readFile(
    path.join(
      fileURLToPath(import.meta.url),
      '../../public/fonts/Montserrat-Medium.ttf'
    )
  )

  return {
    ...METAFONT,
    data: font
  } as MetaFontOptions
}
