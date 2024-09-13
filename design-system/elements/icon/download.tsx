import { styled } from '@/styled-system/jsx'
import { icon } from './icon.styles'
import { IconProps } from './icon.types'

const DownloadSVG = (props: IconProps) => (
  <span {...props}>
    <svg fill="currentColor" viewBox="0 0 512 512">
      <path d="M376 160H272v153.37l52.69-52.68a16 16 0 0122.62 22.62l-80 80a16 16 0 01-22.62 0l-80-80a16 16 0 0122.62-22.62L240 313.37V160H136a56.06 56.06 0 00-56 56v208a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V216a56.06 56.06 0 00-56-56zM272 48a16 16 0 00-32 0v112h32z" />
    </svg>
  </span>
)

export const Download = styled(DownloadSVG, icon)
