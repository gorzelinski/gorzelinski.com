import { MetaFontOptions } from '@/types'

export const metadataBase = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  : new URL(`http://localhost:${process.env.PORT || 3000}`)

export const CONTENTTYPE = 'image/png'

export const METAFONT = {
  name: 'Montserrat',
  style: 'normal'
} as MetaFontOptions

export const OPENGRAPH = {
  width: 1200,
  height: 630
}

export const TWITTER = {
  width: 1200,
  height: 600
}
