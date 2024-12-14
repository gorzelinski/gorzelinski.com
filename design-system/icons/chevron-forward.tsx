import { styled } from '@/styled-system/jsx'
import { icon } from './icon.styles'
import { IconProps } from './icon.types'

const ChevronForwardSVG = (props: IconProps) => (
  <span {...props}>
    <svg viewBox="0 0 512 512">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M184 112l144 144-144 144"
      />
    </svg>
  </span>
)

export const ChevronForward = styled(ChevronForwardSVG, icon)
