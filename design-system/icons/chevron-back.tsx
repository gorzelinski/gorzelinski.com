import { createIcon } from './icon.helpers'

const ChevronBackSvg = () => (
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
)

export const ChevronBack = createIcon(ChevronBackSvg)
