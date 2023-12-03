import { defineTokens } from '@pandacss/dev'

export const tokens = defineTokens({
  colors: {
    light: {
      // Blue
      blue: {
        900: {
          value: 'hsl(210, 96%, 95%)'
        },
        800: {
          value: 'hsl(210, 96%, 90%)'
        },
        700: {
          value: 'hsl(210, 96%, 80%)'
        },
        600: {
          value: 'hsl(210, 96%, 70%)'
        },
        500: {
          value: 'hsl(210, 96%, 60%)'
        },
        400: {
          value: 'hsl(210, 96%, 40%)',
          description: 'Brand color. A base for other shades.'
        },
        300: {
          value: 'hsl(210, 96%, 30%)'
        },
        200: {
          value: 'hsl(210, 96%, 20%)'
        },
        100: {
          value: 'hsl(210, 96%, 10%)'
        },
        50: {
          value: 'hsl(210, 96%, 5%)'
        }
      },
      // Gray
      gray: {
        900: {
          value: 'hsl(208, 7%, 98%)'
        },
        800: {
          value: 'hsl(208, 7%, 96%)'
        },
        700: {
          value: 'hsl(208, 7%, 86%)'
        },
        600: {
          value: 'hsl(208, 7%, 76%)'
        },
        500: {
          value: 'hsl(208, 7%, 66%)'
        },
        400: {
          value: 'hsl(208, 7%, 42%)',
          description: 'Gray color. A base for other shades.'
        },
        300: {
          value: 'hsl(208, 7%, 36%)'
        },
        200: {
          value: 'hsl(208, 7%, 26%)'
        },
        100: {
          value: 'hsl(208, 7%, 16%)'
        },
        50: {
          value: 'hsl(208, 7%, 6%)'
        },
        25: {
          value: 'hsl(208, 7%, 0%)'
        }
      },
      // Red
      red: {
        900: {
          value: 'hsl(347, 64%, 95%)'
        },
        400: {
          value: 'hsl(347, 64%, 48%)',
          description: 'Red color. A base for other shades.'
        }
      },
      // Orange
      orange: {
        900: {
          value: 'hsl(44, 100%, 96%)'
        },
        400: {
          value: 'hsl(44, 100%, 27%)',
          description: 'Orange color. A base for other shades.'
        }
      },
      // Green
      green: {
        900: {
          value: 'hsl(126, 72%, 95%)'
        },
        400: {
          value: 'hsl(126, 72%, 29%)',
          description: 'Green color. A base for other shades.'
        }
      }
    },
    dark: {
      // Blue
      blue: {
        900: {
          value: 'hsl(210, 100%, 14%)'
        },
        800: {
          value: 'hsl(210, 100%, 19%)'
        },
        700: {
          value: 'hsl(210, 100%, 24%)'
        },
        600: {
          value: 'hsl(210, 100%, 34%)'
        },
        500: {
          value: 'hsl(210, 100%, 44%)'
        },
        400: {
          value: 'hsl(210, 100%, 54%)',
          description: 'Brand color (dark mode). A base for other shades.'
        },
        300: {
          value: 'hsl(210, 100%, 64%)'
        },
        200: {
          value: 'hsl(210, 100%, 74%)'
        },
        100: {
          value: 'hsl(210, 100%, 84%)'
        },
        50: {
          value: 'hsl(210, 100%, 94%)'
        }
      },
      // Gray
      gray: {
        900: {
          value: 'hsl(208, 7%, 98%)'
        },
        800: {
          value: 'hsl(208, 7%, 96%)'
        },
        700: {
          value: 'hsl(208, 7%, 86%)'
        },
        600: {
          value: 'hsl(208, 7%, 76%)'
        },
        500: {
          value: 'hsl(208, 7%, 66%)'
        },
        400: {
          value: 'hsl(208, 7%, 42%)',
          description: 'Gray color (dark mode). A base for other shades.'
        },
        300: {
          value: 'hsl(208, 7%, 36%)'
        },
        200: {
          value: 'hsl(208, 7%, 26%)'
        },
        100: {
          value: 'hsl(208, 7%, 16%)'
        },
        50: {
          value: 'hsl(208, 7%, 6%)'
        },
        25: {
          value: 'hsl(208, 7%, 0%)'
        }
      },
      // Red
      red: {
        900: {
          value: 'hsl(347, 64%, 15%)'
        },
        400: {
          value: 'hsl(347, 64%, 62%)',
          description: 'Red color (dark mode). A base for other shades.'
        }
      },
      // Orange
      orange: {
        900: {
          value: 'hsl(44, 100%, 9%)'
        },
        400: {
          value: 'hsl(44, 100%, 52%)',
          description: 'Orange color (dark mode). A base for other shades.'
        }
      },
      // Green
      green: {
        900: {
          value: 'hsl(126, 72%, 9%)'
        },
        400: {
          value: 'hsl(126, 72%, 39%)',
          description: 'Green color (dark mode). A base for other shades.'
        }
      }
    }
  },
  sizes: {
    '2xs': {
      value: '64px'
    },
    xs: {
      value: '128px'
    },
    s: {
      value: '192px'
    },
    m: {
      value: '256px'
    },
    l: {
      value: '320px'
    },
    xl: {
      value: '384px'
    }
  },
  spacing: {
    '0': {
      value: '0px'
    },
    '3xs': {
      value: '1px'
    },
    '2xs': {
      value: '2px'
    },
    xs: {
      value: '4px'
    },
    s: {
      value: '8px'
    },
    m: {
      value: '16px'
    },
    l: {
      value: '24px'
    },
    xl: {
      value: '32px'
    },
    '2xl': {
      value: '64px'
    }
  },
  fonts: {
    sans: {
      value: ['var(--font-montserrat)']
    },
    serif: {
      value: ['var(--font-lora)']
    },
    mono: {
      value: ['var(--font-fira-code)']
    }
  },
  fontSizes: {
    '4xl': {
      value: '4rem'
    },
    '3xl': {
      value: '3rem'
    },
    '2xl': {
      value: '2.5rem'
    },
    xl: {
      value: '2rem'
    },
    l: {
      value: '1.75rem'
    },
    m: {
      value: '1.5rem'
    },
    s: {
      value: '1.375rem'
    },
    xs: {
      value: '1.125rem'
    },
    '2xs': {
      value: '1rem'
    },
    '3xs': {
      value: '0.875rem'
    },
    '4xs': {
      value: '0.75rem'
    }
  },
  fontWeights: {
    regular: {
      value: '400'
    },
    medium: {
      value: '500'
    },
    bold: {
      value: '600'
    }
  },
  letterSpacings: {
    packed: {
      value: '-0.05em'
    },
    narrow: {
      value: '-0.025em'
    },
    wide: {
      value: '0.1em'
    }
  },
  lineHeights: {
    '4xl': {
      value: '5rem'
    },
    '3xl': {
      value: '3.5rem'
    },
    '2xl': {
      value: '3rem'
    },
    xl: {
      value: '2.5rem'
    },
    l: {
      value: '2.25rem'
    },
    m: {
      value: '2rem'
    },
    s: {
      value: '1.875rem'
    },
    xs: {
      value: '1.75rem'
    },
    '2xs': {
      value: '1.5rem'
    },
    '3xs': {
      value: '1.25rem'
    },
    '4xs': {
      value: '1rem'
    }
  },
  radii: {
    l: {
      value: '32px'
    },
    m: {
      value: '16px'
    },
    s: {
      value: '8px'
    },
    xs: {
      value: '4px'
    },
    none: {
      value: '0px'
    }
  },
  borders: {
    primary: {
      regular: {
        value: '{spacing.2xs} solid {colors.primary.400}'
      }
    },
    gray: {
      subtle: {
        value: '{spacing.3xs} solid {colors.gray.700}'
      },
      regular: {
        value: '{spacing.2xs} solid {colors.gray.700}'
      }
    }
  },
  shadows: {
    light: {
      neumorphism: {
        closest: {
          value: '1px 1px 2px #d5d5d5, -1px -1px 2px #ffffff'
        },
        closer: {
          value: '2px 2px 4px #d5d5d5, -2px -2px 4px #ffffff'
        },
        close: {
          value: '4px 4px 8px #d5d5d5, -4px -4px 8px #ffffff'
        },
        far: {
          value: '8px 8px 16px #d5d5d5, -8px -8px 16px #ffffff'
        },
        farther: {
          value: '12px 12px 24px #d5d5d5, -12px -12px 24px #ffffff'
        }
      }
    },
    dark: {
      neumorphism: {
        closest: {
          value: '1px 1px 2px #0a0a0b, -1px -1px 2px #121415'
        },
        closer: {
          value: '2px 2px 4px #0a0a0b, -2px -2px 4px #121415'
        },
        close: {
          value: '4px 4px 8px #0a0a0b, -4px -4px 8px #121415'
        },
        far: {
          value: '8px 8px 16px #0a0a0b, -8px -8px 16px #121415'
        },
        farther: {
          value: '12px 12px 24px #0a0a0b, -12px -12px 24px #121415'
        }
      }
    }
  },
  easings: {
    easeInSine: {
      value: 'cubic-bezier(0.12, 0, 0.39, 0)'
    },
    easeOutSine: {
      value: 'cubic-bezier(0.61, 1, 0.88, 1)'
    }
  },
  durations: {
    fast: {
      value: '150ms'
    },
    natural: {
      value: '250ms'
    },
    slow: {
      value: '500ms'
    },
    slower: {
      value: '750ms'
    }
  }
})
