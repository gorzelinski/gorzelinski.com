import { LINKS } from '@/constants'
import { localizePath } from '@/lib'
import { footer } from './footer.styles'
import { FooterProps } from './footer.types'
import { HStack, VStack } from '@/styled-system/jsx'
import {
  ButtonAnchor,
  ButtonLink,
  Cafe,
  Heart,
  Mail,
  Small,
  navigation
} from '../../elements'
import { LanguageSwitch, Socials } from '../../components'

export const Footer = ({ lang, dictionary }: FooterProps) => {
  const { links, section, layout } = dictionary

  return (
    <footer className={footer()}>
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
            href={localizePath(lang, LINKS.home)}
          >
            {links.home}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(lang, LINKS.portfolio)}
          >
            {links.portfolio}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(lang, LINKS.about)}
          >
            {links.about}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(lang, LINKS.uses)}
          >
            {links.uses}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(lang, LINKS.blog)}
          >
            {links.blog}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(lang, LINKS.newsletter)}
          >
            {links.newsletter}
          </ButtonLink>
          <ButtonLink
            variant="nav"
            size="s"
            href={localizePath(lang, LINKS.rss)}
          >
            {links.rss}
          </ButtonLink>
        </div>
      </HStack>
    </footer>
  )
}
