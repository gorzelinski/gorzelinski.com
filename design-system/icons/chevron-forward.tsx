import { createIcon } from './icon.helpers'

const ChevronForwardSvg = () => (
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
)

export const ChevronForward = createIcon(ChevronForwardSvg)
