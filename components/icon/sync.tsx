import { styled } from '@/styled-system/jsx'
import { IconVariantProps, icon } from './icon.styles'

const SyncSVG = (props: IconVariantProps) => (
  <span {...props}>
    <svg viewBox="0 0 512 512">
      <path
        d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 00-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 00140-66.92"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M32 256l44-44 46 44M480 256l-44 44-46-44"
      />
    </svg>
  </span>
)

export const Sync = styled(SyncSVG, icon)
