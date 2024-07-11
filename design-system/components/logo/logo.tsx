import { LogoProps } from './logo.types'
import { LINKS } from '@/constants'
import { localizePath } from '@/lib'
import { ButtonLink } from '../../elements'

export const Logo = ({ children, lang }: LogoProps) => {
  return (
    <ButtonLink
      variant="nav"
      align="left"
      href={localizePath(LINKS.home, lang)}
    >
      {children}
    </ButtonLink>
  )
}
