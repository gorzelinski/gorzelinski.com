import { styled } from '@/styled-system/jsx'
import { IconVariantProps, icon } from './icon.styles'

const ChevronBackSVG = (props: IconVariantProps) => (
  <span {...props}>
    <svg viewBox="0 0 512 512">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M328 112L184 256l144 144"
      />
    </svg>
  </span>
)

export const ChevronBack = styled(ChevronBackSVG, icon)
