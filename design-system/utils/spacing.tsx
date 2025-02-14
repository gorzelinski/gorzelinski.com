import { css } from '@/styled-system/css'

export const verticalRhythm = {
  gap: {
    l: css.raw({
      gap: {
        base: 'verticalRhythm.l.base',
        md: 'verticalRhythm.l.md',
        lg: 'verticalRhythm.l.lg',
        '2xl': 'verticalRhythm.l.2xl'
      }
    }),
    m: css.raw({
      gap: {
        base: 'verticalRhythm.m.base',
        md: 'verticalRhythm.m.md',
        lg: 'verticalRhythm.m.lg',
        '2xl': 'verticalRhythm.m.2xl'
      }
    }),
    s: css.raw({
      gap: {
        base: 'verticalRhythm.s.base',
        md: 'verticalRhythm.s.md',
        lg: 'verticalRhythm.s.lg',
        '2xl': 'verticalRhythm.s.2xl'
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
        base: 'calc(2 * token(spacing.verticalRhythm.m.base))',
        md: 'calc(2 * token(spacing.verticalRhythm.m.md))',
        lg: 'calc(2 * token(spacing.verticalRhythm.m.lg))',
        '2xl': 'calc(2 * token(spacing.verticalRhythm.m.2xl))'
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
  },
  paddingY: {
    l: css.raw({
      paddingY: {
        base: 'verticalRhythm.l.base',
        md: 'verticalRhythm.l.md',
        lg: 'verticalRhythm.l.lg',
        '2xl': 'verticalRhythm.l.2xl'
      }
    }),
    m: css.raw({
      paddingY: {
        base: 'verticalRhythm.m.base',
        md: 'verticalRhythm.m.md',
        lg: 'verticalRhythm.m.lg',
        '2xl': 'verticalRhythm.m.2xl'
      }
    }),
    s: css.raw({
      paddingY: {
        base: 'verticalRhythm.s.base',
        md: 'verticalRhythm.s.md',
        lg: 'verticalRhythm.s.lg',
        '2xl': 'verticalRhythm.s.2xl'
      }
    })
  }
}
