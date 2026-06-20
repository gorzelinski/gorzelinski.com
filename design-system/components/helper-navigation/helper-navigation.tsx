import type { HelperNavigationProps } from './helper-navigation.types'

import { Nav } from '../../elements'
import { Logo } from '../logo'
import { ThemeSwitch } from '../theme-switch'

export const HelperNavigation = ({
  ariaLabel,
  lang,
  logoAriaLabel,
  themeAriaLabel
}: HelperNavigationProps) => {
  return (
    <Nav aria-label={ariaLabel} width="responsive">
      <Logo ariaLabel={logoAriaLabel} lang={lang} />
      <ThemeSwitch ariaLabel={themeAriaLabel} />
    </Nav>
  )
}
