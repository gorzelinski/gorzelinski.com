import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./components/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
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
        '2xs': {
          value: '1px'
        },
        xs: {
          value: '2px'
        },
        s: {
          value: '8px'
        },
        m: {
          value: '16px'
        },
        l: {
          value: '32px'
        },
        xl: {
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
          value: '0.075rem'
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
        }
      },
      borders: {
        subtle: {
          value: '{spacing.2xs} solid {colors.gray.700}'
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
    },
    semanticTokens: {
      colors: {
        // Primary
        primary: {
          900: {
            value: {
              base: '{colors.light.blue.900}',
              _dark: '{colors.dark.blue.900}'
            }
          },
          800: {
            value: {
              base: '{colors.light.blue.800}',
              _dark: '{colors.dark.blue.800}'
            }
          },
          700: {
            value: {
              base: '{colors.light.blue.700}',
              _dark: '{colors.dark.blue.700}'
            }
          },
          600: {
            value: {
              base: '{colors.light.blue.600}',
              _dark: '{colors.dark.blue.600}'
            }
          },
          500: {
            value: {
              base: '{colors.light.blue.500}',
              _dark: '{colors.dark.blue.500}'
            }
          },
          400: {
            value: {
              base: '{colors.light.blue.400}',
              _dark: '{colors.dark.blue.400}'
            }
          },
          300: {
            value: {
              base: '{colors.light.blue.300}',
              _dark: '{colors.dark.blue.300}'
            }
          },
          200: {
            value: {
              base: '{colors.light.blue.200}',
              _dark: '{colors.dark.blue.200}'
            }
          },
          100: {
            value: {
              base: '{colors.light.blue.100}',
              _dark: '{colors.dark.blue.100}'
            }
          },
          50: {
            value: {
              base: '{colors.light.blue.50}',
              _dark: '{colors.dark.blue.50}'
            }
          }
        },
        // Gray
        gray: {
          900: {
            value: {
              base: '{colors.light.gray.900}',
              _dark: '{colors.dark.gray.900}'
            }
          },
          800: {
            value: {
              base: '{colors.light.gray.800}',
              _dark: '{colors.dark.gray,800}'
            }
          },
          700: {
            value: {
              base: '{colors.light.gray.700}',
              _dark: '{colors.dark.gray.700}'
            }
          },
          600: {
            value: {
              base: '{colors.light.gray.600}',
              _dark: '{colors.dark.gray.600}'
            }
          },
          500: {
            value: {
              base: '{colors.light.gray.500}',
              _dark: '{colors.dark.gray.500}'
            }
          },
          400: {
            value: {
              base: '{colors.light.gray.400}',
              _dark: '{colors.dark.gray.400}'
            }
          },
          300: {
            value: {
              base: '{colors.light.gray.300}',
              _dark: '{colors.dark.gray.300}'
            }
          },
          200: {
            value: {
              base: '{colors.light.gray.200}',
              _dark: '{colors.dark.gray.200}'
            }
          },
          100: {
            value: {
              base: '{colors.light.gray.100}',
              _dark: '{colors.dark.gray.100}'
            }
          },
          50: {
            value: {
              base: '{colors.light.gray.50}',
              _dark: '{colors.dark.gray.50}'
            }
          }
        },
        // Danger
        danger: {
          900: {
            value: {
              base: '{colors.light.red.900}',
              _dark: '{colors.dark.red.900}'
            }
          },
          400: {
            value: {
              base: '{colors.light.red.400}',
              _dark: '{colors.dark.red.400}'
            }
          }
        },
        // Warning
        warning: {
          900: {
            value: {
              base: '{colors.light.orange.900}',
              _dark: '{colors.dark.orange.400}'
            }
          },
          400: {
            value: {
              base: '{colors.light.orange.400}',
              _dark: '{colors.dark.orange.400}'
            }
          }
        },
        // Success
        success: {
          900: {
            value: {
              base: '{colors.light.green.900}',
              _dark: '{colors.dark.green.900}'
            }
          },
          400: {
            value: {
              base: '{colors.light.green.400}',
              _dark: '{colors.dark.green.400}'
            }
          }
        }
      },
      fonts: {
        heading: {
          value: '{fonts.sans}'
        },
        body: {
          value: '{fonts.serif}'
        },
        code: {
          value: '{fonts.mono}'
        }
      },
      shadows: {
        neumorphism: {
          closest: {
            value: {
              base: '{shadows.light.neumorphism.closest}',
              _dark: '{shadows.dark.neumorphism.closest}'
            }
          },
          closer: {
            value: {
              base: '{shadows.light.neumorphism.closer}',
              _dark: '{shadows.dark.neumorphism.closer}'
            }
          },
          close: {
            value: {
              base: '{shadows.light.neumorphism.close}',
              _dark: '{shadows.dark.neumorphism.close}'
            }
          },
          far: {
            value: {
              base: '{shadows.light.neumorphism.far}',
              _dark: '{shadows.dark.neumorphism.far}'
            }
          },
          farther: {
            value: {
              base: '{shadows.light.neumorphism.farther}',
              _dark: '{shadows.dark.neumorphism.farther}'
            }
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
})
