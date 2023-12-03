import { cva } from '@/styled-system/css'

export const button = cva({
  base: {
    display: 'inline-flex',
    gap: 's',
    padding: 's',
    alignItems: 'center',
    fontFamily: 'heading',
    fontWeight: 'medium',
    letterSpacing: 'wide',
    cursor: 'pointer',
    textDecoration: 'none',
    _disabled: {
      cursor: 'not-allowed',
      pointerEvents: 'none'
    }
  },
  variants: {
    align: {
      left: {
        marginLeft: '-s'
      },
      right: {
        marginRight: '-s'
      }
    },
    borderRadius: {
      regular: {
        borderRadius: 's'
      },
      none: {
        borderRadius: 'none'
      }
    },
    size: {
      l: {
        fontSize: {
          base: 's',
          md: 'm',
          lg: 'l',
          xl: 'l',
          '2xl': 'xl'
        },
        lineHeight: {
          base: 's',
          md: 'm',
          lg: 'l',
          xl: 'l',
          '2xl': 'xl'
        }
      },
      m: {
        fontSize: {
          base: '2xs',
          md: 'xs',
          lg: 's',
          xl: 's',
          '2xl': 'm'
        },
        lineHeight: {
          base: '2xs',
          md: 'xs',
          lg: 's',
          xl: 's',
          '2xl': 'm'
        }
      },
      s: {
        fontSize: {
          base: '4xs',
          md: '3xs',
          lg: '2xs',
          xl: '2xs',
          '2xl': 'xs'
        },
        lineHeight: {
          base: '4xs',
          md: '3xs',
          lg: '2xs',
          xl: '2xs',
          '2xl': 'xs'
        }
      }
    },
    style: {
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
        backgroundColor: 'gray.900',
        color: 'primary.400',
        border: 'primary.regular',
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
        transitionProperty: 'color',
        transitionDuration: 'natural',
        transitionTimingFunction: 'easeOutSine',
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
        '&.active-subtle': {
          color: 'gray.50'
        },
        _active: {
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
          width: '100%',
          height: '2px',
          bottom: '0',
          left: '0',
          backgroundColor: 'gray.50',
          transform: 'scaleX(0)',
          transformOrigin: 'bottom right',
          transitionProperty: 'transform',
          transitionDuration: 'natural',
          transitionTimingFunction: 'easeOutSine'
        }
      }
    },
    width: {
      fixed: {
        width: 'auto',
        justifyContent: 'space-between'
      },
      full: {
        width: '100%',
        justifyContent: 'center'
      }
    }
  },
  defaultVariants: {
    style: 'primary',
    borderRadius: 'regular',
    size: 'm',
    width: 'fixed'
  },
  compoundVariants: [
    {
      style: 'nav',
      css: {
        borderRadius: 'none'
      }
    }
  ]
})
