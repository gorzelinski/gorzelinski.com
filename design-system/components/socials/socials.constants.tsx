import { LINKS, SOCIALS } from '@/constants'
import { Social } from './socials.types'
import {
  Bluesky,
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter
} from '../../icons'

export const socialLinks: Social[] = [
  {
    name: 'GitHub',
    url: SOCIALS.github,
    icon: <Github />
  },
  {
    name: 'Dribbble',
    url: SOCIALS.dribbble,
    icon: <Dribbble />
  },
  {
    name: 'Bluesky',
    url: SOCIALS.bluesky,
    icon: <Bluesky />
  },
  {
    name: 'Twitter',
    url: SOCIALS.twitter,
    icon: <Twitter />
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
