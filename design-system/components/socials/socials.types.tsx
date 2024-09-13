export type Social = {
  name: string
  url: string
  icon: JSX.Element
}

export type Share = {
  twitter: string
  facebook: string
  linkedin: string
  email: string
}

export type SocialsProps = {
  socials?: Social[]
  title?: string
}
