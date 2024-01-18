import { LogoProps } from './logo.types'
import { LINKS } from '@/constants'
import { localizePath } from '@/lib'
import { ButtonLink } from '../../elements'

export const Logo = ({ children, lang }: LogoProps) => {
  return (
    <ButtonLink style="nav" align="left" href={localizePath(lang, LINKS.home)}>
      {children}
    </ButtonLink>
  )
}
