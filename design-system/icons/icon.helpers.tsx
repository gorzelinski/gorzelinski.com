import type { IconProps } from './icon.types'
import { cx } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { icon } from './icon.styles'

export function createIcon(Svg: () => React.JSX.Element) {
  const IconSVG = ({ className, ...props }: IconProps) => (
    <span className={cx('icon', className)} {...props}>
      <Svg />
    </span>
  )

  return styled(IconSVG, icon)
}
