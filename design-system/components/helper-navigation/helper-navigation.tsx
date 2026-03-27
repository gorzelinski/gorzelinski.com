import type { HelperNavigationProps } from './helper-navigation.types'
import { Logo, ThemeSwitch } from '../../components'
import { Nav } from '../../elements'

export const HelperNavigation = ({
  ariaLabel,
  lang,
  title,
  themeAriaLabel
}: HelperNavigationProps) => {
  return (
    <Nav aria-label={ariaLabel} width="responsive">
      <Logo lang={lang}>{title}</Logo>
      <ThemeSwitch ariaLabel={themeAriaLabel} />
    </Nav>
  )
}
