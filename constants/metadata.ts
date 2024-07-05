export const metadataBase = process.env.VERCEL_URL
  ? new URL(`https://${process.env.VERCEL_URL}`)
  : new URL(`http://localhost:${process.env.PORT || 3000}`)

export const CONTENTTYPE = 'image/png'

export const METAFONT = {
  name: 'Montserrat',
  style: 'normal',
  weight: 500
}

export const OPENGRAPH = {
  width: 1200,
  height: 630
}
