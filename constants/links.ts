export const HANDLES = {
  github: 'gorzelinski',
  bluesky: 'gorzelinski.com',
  twitter: 'gorzelinski',
  dribbble: 'gorzelinski',
  facebook: 'gorzelinski',
  instagram: 'gorzelinsky',
  linkedin: 'mateusz-gorzelinski'
} as const

export const SOCIALS = {
  github: `https://github.com/${HANDLES.github}`,
  bluesky: `https://bsky.app/profile/${HANDLES.bluesky}`,
  twitter: `https://twitter.com/${HANDLES.twitter}`,
  dribbble: `https://dribbble.com/${HANDLES.dribbble}`,
  facebook: `https://www.facebook.com/${HANDLES.facebook}`,
  instagram: `https://www.instagram.com/${HANDLES.instagram}/`,
  linkedin: `https://www.linkedin.com/in/${HANDLES.linkedin}/`
} as const

export const LINKS = {
  siteUrl: 'https://gorzelinski.com',
  home: '/',
  portfolio: '/portfolio/',
  about: '/about/',
  uses: '/uses/',
  blog: '/blog/',
  contact: '#contact',
  newsletter: '/#newsletter',
  rss: '/feed.xml',
  subscriptionConfirmed: '/subscription-confirmed/',
  email: 'hello@gorzelinski.com',
  content: 'content',
  logo: '/images/logo.png',
  buyMeACoffee: 'https://buymeacoffee.com/gorzelinski',
  buyCoffeeTo: 'https://buycoffee.to/gorzelinski/'
} as const

export const CRAWLABLE = [
  LINKS.home,
  LINKS.portfolio,
  LINKS.about,
  LINKS.uses,
  LINKS.blog
] as const

export type Pages = (typeof LINKS)[
  | 'home'
  | 'portfolio'
  | 'about'
  | 'blog'
  | 'uses'
  | 'subscriptionConfirmed']
