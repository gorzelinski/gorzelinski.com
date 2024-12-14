import { LINKS } from '@/constants'
import { localizePath } from '@/lib'
import { footer } from './footer.styles'
import { FooterProps } from './footer.types'
import { HStack, VStack } from '@/styled-system/jsx'
import { ButtonAnchor, ButtonLink, Small, navigation } from '../../elements'
import { Cafe, Heart, Mail } from '../../icons'
import { LanguageSwitch, Socials } from '../../components'

export const Footer = ({ lang, dictionary }: FooterProps) => {
  const { links, section, layout } = dictionary

  return (
    <footer id="contact" className={footer()}>
      <HStack justifyContent="space-between" flexWrap="wrap" gap="l">
        <VStack alignItems="start" gap="xs">
          <Small>{section.footer.email}</Small>
          <ButtonAnchor
            variant="text"
            size="s"
            align="left"
            href={`mailto:${LINKS.email}`}
          >
            <Mail />
            {LINKS.email}
          </ButtonAnchor>
        </VStack>
        <VStack alignItems="start" gap="xs">
          <Small>{section.footer.socials}</Small>
          <Socials />
        </VStack>
        <VStack alignItems="start" gap="xs">
          <Small>{section.footer.language}</Small>
          <LanguageSwitch lang={lang} />
        </VStack>
      </HStack>
      <HStack justifyContent="space-between" flexWrap="wrap-reverse" gap="l">
        <Small>
          © {new Date().getFullYear()} {layout.root.metadata.author} •{' '}
          {section.footer.note} <Heart color="danger" verticalAlign="bottom" />{' '}
          <Cafe color="warning" verticalAlign="bottom" />
        </Small>
        <div className={navigation({ align: 'left' })}>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(LINKS.home, lang)}
          >
            {links.home}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(LINKS.portfolio, lang)}
          >
            {links.portfolio}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(LINKS.about, lang)}
          >
            {links.about}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(LINKS.uses, lang)}
          >
            {links.uses}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(LINKS.blog, lang)}
          >
            {links.blog}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(LINKS.newsletter, lang)}
          >
            {links.newsletter}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(LINKS.rss, lang)}
          >
            {links.rss}
          </ButtonLink>
        </div>
      </HStack>
    </footer>
  )
}
