import { METAFONT } from '@/constants'

type FontOptions = {
  data: ArrayBuffer
  name: string
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  style?: 'normal' | 'italic'
}

export async function getMetaFont() {
  const response = await fetch(
    new URL('/public/fonts/Montserrat-Medium.ttf', import.meta.url)
  )
  const montserratMedium = await response.arrayBuffer()

  return {
    ...METAFONT,
    data: montserratMedium
  } as FontOptions
}
