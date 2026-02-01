import type { Theme } from '@/types'

export type MetaFontOptions = {
  data: ArrayBuffer
  name: string
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  style?: 'normal' | 'italic'
}

export type MetaImageProps = {
  title: string
  subtitle: string
  theme: Theme
  backgroundURL?: string
}
