import { LINKS } from '@/constants'
import { Social } from './socials.types'
import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter
} from '../../elements'

export const SOCIALS: Social[] = [
  {
    name: 'GitHub',
    url: LINKS.github,
    icon: <Github />
  },
  {
    name: 'Twitter',
    url: LINKS.twitter,
    icon: <Twitter />
  },
  {
    name: 'Dribbble',
    url: LINKS.dribbble,
    icon: <Dribbble />
  },
  {
    name: 'Facebook',
    url: LINKS.facebook,
    icon: <Facebook />
  },
  {
    name: 'Instagram',
    url: LINKS.instagram,
    icon: <Instagram />
  },
  {
    name: 'LinkedIn',
    url: LINKS.linkedin,
    icon: <Linkedin />
  },
  {
    name: 'Email',
    url: LINKS.email,
    icon: <Mail />
  }
]
