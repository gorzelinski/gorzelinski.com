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
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
})
