import { LINKS, SOCIALS } from '@/constants'
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

export const socialLinks: Social[] = [
  {
    name: 'GitHub',
    url: SOCIALS.github,
    icon: <Github />
  },
  {
    name: 'Twitter',
    url: SOCIALS.twitter,
    icon: <Twitter />
  },
  {
    name: 'Dribbble',
    url: SOCIALS.dribbble,
    icon: <Dribbble />
  },
  {
    name: 'Facebook',
    url: SOCIALS.facebook,
    icon: <Facebook />
  },
  {
    name: 'Instagram',
    url: SOCIALS.instagram,
    icon: <Instagram />
  },
  {
    name: 'LinkedIn',
    url: SOCIALS.linkedin,
    icon: <Linkedin />
  },
  {
    name: 'Email',
    url: LINKS.email,
    icon: <Mail />
  }
]
