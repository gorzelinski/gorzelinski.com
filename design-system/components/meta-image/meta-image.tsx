import { LINKS, metadataBase } from '@/constants'
import { MetaImageProps } from './meta-image.types'

export const MetaImage = ({
  theme,
  title,
  subtitle,
  backgroundURL
}: MetaImageProps) => {
  const colors = {
    light: {
      background: backgroundURL ? 'hsl(208, 7%, 98%, .8)' : 'hsl(208, 7%, 98%)',
      color: {
        text: 'hsl(208, 7%, 0%)',
        subtle: 'hsl(208, 7%, 42%)'
      }
    },
    dark: {
      background: backgroundURL ? 'hsl(208, 7%, 6%, .8)' : 'hsl(208, 7%, 6%)',
      color: {
        text: 'hsl(208, 7%, 100%)',
        subtle: 'hsl(208, 7%, 58%)'
      }
    }
  }

  return (
    <div
      style={{
        ...(backgroundURL && { backgroundImage: `url(${backgroundURL})` }),
        backgroundPosition: 'top left',
        backgroundSize: '1200px 630px',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          backgroundColor: colors[theme].background,
          width: '100%',
          height: '100%',
          padding: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <img
          src={`${metadataBase}${LINKS.logo}`}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%'
          }}
        />
        <div
          style={{
            fontSize: '24px',
            lineHeight: '32px',
            letterSpacing: '0.1em',
            fontWeight: '500',
            color: colors[theme].color.subtle
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            fontSize: '48px',
            lineHeight: '64px',
            letterSpacing: '-0.025em',
            fontWeight: '600',
            color: colors[theme].color.text
          }}
        >
          {title}
        </div>
      </div>
    </div>
  )
}
