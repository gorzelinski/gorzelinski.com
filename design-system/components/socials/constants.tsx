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
    url: 'https://github.com/gorzelinski',
    icon: <Github />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/gorzelinski',
    icon: <Twitter />
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/gorzelinski',
    icon: <Dribbble />
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/gorzelinski',
    icon: <Facebook />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/gorzelinsky',
    icon: <Instagram />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mateusz-gorzelinski',
    icon: <Linkedin />
  },
  {
    name: 'Email',
    url: 'hello@gorzelinski.com',
    icon: <Mail />
  }
]
