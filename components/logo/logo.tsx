import { LogoProps } from './logo.types'
import { localizePath } from '@/lib'
import { ButtonLink } from '../button-link'

export const Logo = ({ children, lang }: LogoProps) => {
  return (
    <ButtonLink style="nav" align="left" href={localizePath(lang, '/')}>
      {children}
    </ButtonLink>
  )
}
