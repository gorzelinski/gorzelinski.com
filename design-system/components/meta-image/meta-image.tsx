import { LINKS } from '@/constants'
import { Theme } from '@/types'
import { getAbsoluteURL } from '@/lib'
import { token } from '@/styled-system/tokens'
import { MetaImageProps } from './meta-image.types'

export const MetaImage = ({
  theme,
  title,
  subtitle,
  backgroundURL
}: MetaImageProps) => {
  const selectBackgroundTransparency = (
    theme: Theme,
    backgroundURL: string | undefined
  ) => {
    return backgroundURL
      ? token(`colors.${theme}.gray.900`).replace(')', ', .8)')
      : token(`colors.${theme}.gray.900`)
  }

  const colors = {
    light: {
      background: selectBackgroundTransparency(theme, backgroundURL),
      color: {
        text: token('colors.light.gray.25'),
        subtle: token('colors.light.gray.400')
      }
    },
    dark: {
      background: selectBackgroundTransparency(theme, backgroundURL),
      color: {
        text: token('colors.dark.gray.25'),
        subtle: token('colors.dark.gray.400')
      }
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        ...(backgroundURL && { backgroundImage: `url(${backgroundURL})` }),
        backgroundPosition: 'top left',
        backgroundSize: '1200px 630px',
        backgroundRepeat: 'no-repeat',
        fontSize: '16px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: token('spacing.m'),
          width: '100%',
          height: '100%',
          padding: '100px',
          backgroundColor: colors[theme].background,
          textAlign: 'center'
        }}
      >
        {/* eslint-disable-next-line */}
        <img
          src={getAbsoluteURL(LINKS.logo)}
          style={{
            width: token('sizes.2xs'),
            height: token('sizes.2xs'),
            borderRadius: token('radii.circle')
          }}
        />
        <div
          style={{
            color: colors[theme].color.subtle,
            fontSize: token('fontSizes.l'),
            fontWeight: token('fontWeights.medium'),
            lineHeight: token('lineHeights.l'),
            letterSpacing: token('letterSpacings.wide')
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            color: colors[theme].color.text,
            fontSize: token('fontSizes.3xl'),
            fontWeight: token('fontWeights.bold'),
            lineHeight: token('lineHeights.3xl'),
            letterSpacing: token('letterSpacings.narrow')
          }}
        >
          {title}
        </div>
      </div>
    </div>
  )
}
