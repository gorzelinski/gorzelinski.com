import { cva } from '@/styled-system/css'

export const navbar = cva({
  base: {
    zIndex: 'closest',
    left: '0',
    display: 'flex',
    width: '100%',
    paddingX: {
      base: 'm',
      sm: 'l',
      md: 'xl'
    },
    paddingY: 'm',
    backgroundColor: 'gray.900',
    transform: 'translateY(0)',
    filter: 'blur(0)',
    transitionProperty: 'background-color, border-color, opacity, transform, filter',
    transitionDuration:
      'token(durations.natural), token(durations.natural), token(durations.fast), token(durations.fast), token(durations.fast)',
    transitionTimingFunction: 'easeOut'
  },
  variants: {
    position: {
      top: {
        position: 'sticky',
        top: '0',
        justifyContent: 'space-between'
      },
      bottom: {
        position: 'fixed',
        bottom: '0',
        borderTop: 'gray.subtle',
        md: {
          display: 'none'
        }
      }
    },
    opacity: {
      visible: {
        opacity: '97'
      },
      hidden: {
        opacity: '0',
        pointerEvents: 'none'
      }
    },
    border: {
      bottom: {
        borderBottom: 'gray.subtle'
      },
      transparent: {
        borderColor: 'transparent'
      }
    }
  },
  compoundVariants: [
    {
      position: 'top',
      opacity: 'hidden',
      css: {
        transform: 'translateY(-12px)',
        filter: 'blur(4px)'
      }
    },
    {
      position: 'bottom',
      opacity: 'hidden',
      css: {
        transform: 'translateY(12px)',
        filter: 'blur(4px)'
      }
    }
  ],
  defaultVariants: {
    opacity: 'visible'
  }
})
