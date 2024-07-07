import { METAFONT } from '@/constants'
import { MetaFontOptions } from '@/types'

// Use it in the 'edge' runtime
export async function getMetaFont() {
  const response = await fetch(
    new URL('/public/fonts/Montserrat-Medium.ttf', import.meta.url)
  )
  const font = await response.arrayBuffer()

  return {
    ...METAFONT,
    data: font
  } as MetaFontOptions
}
