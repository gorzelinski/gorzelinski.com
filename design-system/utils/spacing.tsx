import { css } from '@/styled-system/css'

export const verticalRhythm = {
  gap: {
    m: css.raw({
      gap: {
        base: 'm',
        md: 'l',
        lg: 'xl'
      }
    })
  },
  marginBottom: {
    m: css.raw({
      marginBottom: {
        base: 'verticalRhythm.m.base',
        md: 'verticalRhythm.m.md',
        lg: 'verticalRhythm.m.lg',
        xl: 'verticalRhythm.m.xl',
        '2xl': 'verticalRhythm.m.2xl'
      }
    }),
    s: css.raw({
      marginBottom: {
        base: 'verticalRhythm.s.base',
        md: 'verticalRhythm.s.md',
        lg: 'verticalRhythm.s.lg',
        xl: 'verticalRhythm.s.xl',
        '2xl': 'verticalRhythm.s.2xl'
      }
    })
  },
  marginTop: {
    m: css.raw({
      marginTop: {
        base: 'calc(2 * var(--spacing-vertical-rhythm-m-base))',
        md: 'calc(2 * var(--spacing-vertical-rhythm-m-md))',
        lg: 'calc(2 * var(--spacing-vertical-rhythm-m-lg))',
        xl: 'calc(2 * var(--spacing-vertical-rhythm-m-xl))',
        '2xl': 'calc(2 * var(--spacing-vertical-rhythm-m-2xl))'
      }
    })
  }
}
