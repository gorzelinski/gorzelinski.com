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
    l: css.raw({
      marginBottom: {
        base: 'verticalRhythm.l.base',
        md: 'verticalRhythm.l.md',
        lg: 'verticalRhythm.l.lg',
        '2xl': 'verticalRhythm.l.2xl'
      }
    }),
    m: css.raw({
      marginBottom: {
        base: 'verticalRhythm.m.base',
        md: 'verticalRhythm.m.md',
        lg: 'verticalRhythm.m.lg',
        '2xl': 'verticalRhythm.m.2xl'
      }
    }),
    s: css.raw({
      marginBottom: {
        base: 'verticalRhythm.s.base',
        md: 'verticalRhythm.s.md',
        lg: 'verticalRhythm.s.lg',
        '2xl': 'verticalRhythm.s.2xl'
      }
    })
  },
  marginTop: {
    '2xmarginBottom': css.raw({
      marginTop: {
        base: 'calc(2 * var(--spacing-vertical-rhythm-m-base))',
        md: 'calc(2 * var(--spacing-vertical-rhythm-m-md))',
        lg: 'calc(2 * var(--spacing-vertical-rhythm-m-lg))',
        '2xl': 'calc(2 * var(--spacing-vertical-rhythm-m-2xl))'
      }
    }),
    l: css.raw({
      marginTop: {
        base: 'verticalRhythm.l.base',
        md: 'verticalRhythm.l.md',
        lg: 'verticalRhythm.l.lg',
        '2xl': 'verticalRhythm.l.2xl'
      }
    }),
    m: css.raw({
      marginTop: {
        base: 'verticalRhythm.m.base',
        md: 'verticalRhythm.m.md',
        lg: 'verticalRhythm.m.lg',
        '2xl': 'verticalRhythm.m.2xl'
      }
    }),
    s: css.raw({
      marginTop: {
        base: 'verticalRhythm.s.base',
        md: 'verticalRhythm.s.md',
        lg: 'verticalRhythm.s.lg',
        '2xl': 'verticalRhythm.s.2xl'
      }
    })
  }
}
