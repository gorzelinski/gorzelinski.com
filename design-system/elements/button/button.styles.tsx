import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const button = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 's',
    padding: 's',
    fontFamily: 'heading',
    fontWeight: 'medium',
    letterSpacing: 'wide',
    textDecoration: 'none',
    transitionProperty: 'background-color, color',
    ...sharedTransitionProperties,
    cursor: 'pointer',
    _disabled: {
      cursor: 'not-allowed',
      pointerEvents: 'none'
    },
    '& > span': {
      flexShrink: 0
    }
  },
  variants: {
    align: {
      left: {
        marginLeft: '-s'
      },
      right: {
        marginRight: '-s'
      },
      none: {
        margin: '0'
      }
    },
    size: {
      l: {
        fontSize: {
          base: 's',
          md: 'm',
          lg: 'l',
          '2xl': 'xl'
        },
        lineHeight: {
          base: 's',
          md: 'm',
          lg: 'l',
          '2xl': 'xl'
        }
      },
      m: {
        fontSize: {
          base: '2xs',
          md: 'xs',
          lg: 's',
          '2xl': 'm'
        },
        lineHeight: {
          base: '2xs',
          md: 'xs',
          lg: 's',
          '2xl': 'm'
        }
      },
      s: {
        fontSize: {
          base: '4xs',
          md: '3xs',
          lg: '2xs',
          '2xl': 'xs'
        },
        lineHeight: {
          base: '4xs',
          md: '3xs',
          lg: '2xs',
          '2xl': 'xs'
        }
      }
    },
    variant: {
      primary: {
        backgroundColor: 'primary.400',
        color: 'gray.900',
        _hover: {
          backgroundColor: 'primary.300'
        },
        _focus: {
          backgroundColor: 'primary.200'
        },
        _focusVisible: {
          outline: 'primary.regular',
          outlineOffset: '2xs'
        },
        _active: {
          backgroundColor: 'primary.100'
        },
        _disabled: {
          backgroundColor: 'gray.800',
          color: 'gray.400'
        }
      },
      outline: {
        border: 'primary.regular',
        backgroundColor: 'gray.900',
        color: 'primary.400',
        _hover: {
          backgroundColor: 'primary.400',
          color: 'gray.900'
        },
        _focus: {
          backgroundColor: 'primary.200',
          color: 'gray.900'
        },
        _focusVisible: {
          outline: 'primary.regular',
          outlineOffset: '2xs'
        },
        _active: {
          backgroundColor: 'primary.100',
          color: 'gray.900'
        },
        _disabled: {
          border: 'gray.regular',
          color: 'gray.400'
        }
      },
      text: {
        color: 'primary.400',
        _hover: {
          color: 'primary.300'
        },
        _focus: {
          color: 'primary.200'
        },
        _focusVisible: {
          outline: 'primary.regular',
          outlineOffset: '2xs'
        },
        _active: {
          color: 'primary.100'
        },
        _disabled: {
          color: 'gray.400'
        }
      },
      nav: {
        position: 'relative',
        color: 'gray.400',
        _hover: {
          color: 'gray.200'
        },
        _focus: {
          color: 'gray.100'
        },
        _focusVisible: {
          outline: 'none'
        },
        _active: {
          color: 'gray.50'
        },
        '&.active-subtle': {
          color: 'gray.50'
        },
        '&.active': {
          color: 'gray.50'
        },
        '&:is(:hover, :focus, .active):after': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left'
        },
        _disabled: {
          color: 'gray.500'
        },
        _after: {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          height: '2px',
          backgroundColor: 'gray.50',
          transform: 'scaleX(0)',
          transformOrigin: 'bottom right',
          transitionProperty: 'transform, background-color',
          transitionDuration: 'natural',
          transitionTimingFunction: 'easeOut'
        }
      },
      icon: {
        backgroundColor: 'gray.800',
        color: 'gray.400',
        _hover: {
          backgroundColor: 'gray.700',
          color: 'gray.300'
        },
        _focus: {
          backgroundColor: 'gray.600',
          color: 'gray.200'
        },
        _focusVisible: {
          outline: 'gray.regular',
          outlineOffset: '2xs'
        },
        _active: {
          backgroundColor: 'gray.500',
          color: 'gray.100'
        },
        _disabled: {
          backgroundColor: 'gray.900',
          color: 'gray.500'
        }
      }
    },
    width: {
      fixed: {
        justifyContent: 'space-between',
        width: 'auto'
      },
      responsive: {
        base: {
          justifyContent: 'center',
          width: '100%'
        },
        md: {
          justifyContent: 'space-between',
          width: 'auto'
        }
      },
      stretch: {
        justifyContent: 'center',
        width: '100%'
      }
    },
    transition: {
      moveIconForward: {
        '& > span': {
          transform: 'translateX(0px)',
          transitionProperty: 'transform',
          transitionDuration: 'natural',
          transitionTimingFunction: 'easeInOut'
        },
        _hover: {
          '& > span': {
            transform: 'translateX(token(spacing.s))'
          }
        },
        _active: {
          '& > span': {
            transform: 'translateX(calc(2 * token(spacing.s)))'
          }
        }
      },
      moveIconBackward: {
        '& > span': {
          transform: 'translateX(0px)',
          transitionProperty: 'transform',
          transitionDuration: 'natural',
          transitionTimingFunction: 'easeInOut'
        },
        _hover: {
          '& > span': {
            transform: 'translateX(calc(-1 * token(spacing.s)))'
          }
        },
        _active: {
          '& > span': {
            transform: 'translateX(calc(-2 * token(spacing.s)))'
          }
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'm',
    width: 'fixed'
  },
  compoundVariants: [
    {
      variant: ['primary', 'outline', 'text'],
      css: {
        borderRadius: 's'
      }
    },
    {
      variant: 'nav',
      css: {
        borderRadius: 'none'
      }
    },
    {
      variant: 'icon',
      css: {
        borderRadius: 'circle'
      }
    }
  ]
})
