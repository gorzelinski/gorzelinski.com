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
        ...(backgroundURL && { backgroundImage: `url(${backgroundURL})` }),
        backgroundPosition: 'top left',
        backgroundSize: '1200px 630px',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px'
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
          gap: token('spacing.m'),
          alignItems: 'center',
          justifyContent: 'center',
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
            fontSize: token('fontSizes.l'),
            lineHeight: token('lineHeights.l'),
            letterSpacing: token('letterSpacings.wide'),
            fontWeight: token('fontWeights.medium'),
            color: colors[theme].color.subtle
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            fontSize: token('fontSizes.3xl'),
            lineHeight: token('lineHeights.3xl'),
            letterSpacing: token('letterSpacings.narrow'),
            fontWeight: token('fontWeights.bold'),
            color: colors[theme].color.text
          }}
        >
          {title}
        </div>
      </div>
    </div>
  )
}
