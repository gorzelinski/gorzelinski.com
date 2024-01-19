import { SOCIALS } from './socials.constants'
import { SocialsProps } from './socials.types'
import { ButtonAnchor, navigation } from '../../elements'

export const Socials = ({
  socials = SOCIALS.filter((social) => !(social.name === 'Email'))
}: SocialsProps) => {
  return (
    <div className={navigation()}>
      {socials.map((social) => {
        const { icon, name, url } = social

        return (
          <ButtonAnchor
            style="icon"
            size="s"
            key={name}
            href={url}
            aria-label={name}
            title={name}
            target="_blank"
          >
            {icon}
          </ButtonAnchor>
        )
      })}
    </div>
  )
}
