import type { HelperNavigationProps } from './helper-navigation.types'
import { Logo, ThemeSwitch } from '../../components'
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
