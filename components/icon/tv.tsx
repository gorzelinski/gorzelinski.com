import { styled } from '@/styled-system/jsx'
import { icon } from './icon.styles'
import { IconVariantProps } from './icon.types'

const TvSVG = (props: IconVariantProps) => (
  <span {...props}>
    <svg fill="currentColor" viewBox="0 0 512 512">
      <path d="M447.86 384H64.14A48.2 48.2 0 0116 335.86V128.14A48.2 48.2 0 0164.14 80h383.72A48.2 48.2 0 01496 128.14v207.72A48.2 48.2 0 01447.86 384z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M128 416h256"
      />
    </svg>
  </span>
)

export const Tv = styled(TvSVG, icon)
