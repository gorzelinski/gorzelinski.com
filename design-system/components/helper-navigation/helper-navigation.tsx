import type { HelperNavigationProps } from './helper-navigation.types'
import { Logo } from '../logo'
import { ThemeSwitch } from '../theme-switch'
import { Nav } from '../../elements'

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
