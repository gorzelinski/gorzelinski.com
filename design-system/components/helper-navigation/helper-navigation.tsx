import type { HelperNavigationProps } from './helper-navigation.types'
import { Logo, ThemeSwitch } from '../../components'
import { Nav } from '../../elements'

export const HelperNavigation = ({
  abbreviation,
  ariaLabel,
  lang,
  logoAriaLabel,
  themeAriaLabel
}: HelperNavigationProps) => {
  return (
    <Nav aria-label={ariaLabel} width="responsive">
      <Logo ariaLabel={logoAriaLabel} lang={lang}>
        {abbreviation}
      </Logo>
      <ThemeSwitch ariaLabel={themeAriaLabel} />
    </Nav>
  )
}
