import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
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
          _dark: '{colors.dark.gray.800}'
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
      800: {
        value: {
          base: '{colors.light.red.800}',
          _dark: '{colors.dark.red.800}'
        }
      },
      700: {
        value: {
          base: '{colors.light.red.700}',
          _dark: '{colors.dark.red.700}'
        }
      },
      600: {
        value: {
          base: '{colors.light.red.600}',
          _dark: '{colors.dark.red.600}'
        }
      },
      500: {
        value: {
          base: '{colors.light.red.500}',
          _dark: '{colors.dark.red.500}'
        }
      },
      400: {
        value: {
          base: '{colors.light.red.400}',
          _dark: '{colors.dark.red.400}'
        }
      },
      300: {
        value: {
          base: '{colors.light.red.300}',
          _dark: '{colors.dark.red.300}'
        }
      },
      200: {
        value: {
          base: '{colors.light.red.200}',
          _dark: '{colors.dark.red.200}'
        }
      },
      100: {
        value: {
          base: '{colors.light.red.100}',
          _dark: '{colors.dark.red.100}'
        }
      },
      50: {
        value: {
          base: '{colors.light.red.50}',
          _dark: '{colors.dark.red.50}'
        }
      }
    },
    // Warning
    warning: {
      900: {
        value: {
          base: '{colors.light.orange.900}',
          _dark: '{colors.dark.orange.900}'
        }
      },
      800: {
        value: {
          base: '{colors.light.orange.800}',
          _dark: '{colors.dark.orange.800}'
        }
      },
      700: {
        value: {
          base: '{colors.light.orange.700}',
          _dark: '{colors.dark.orange.700}'
        }
      },
      600: {
        value: {
          base: '{colors.light.orange.600}',
          _dark: '{colors.dark.orange.600}'
        }
      },
      500: {
        value: {
          base: '{colors.light.orange.500}',
          _dark: '{colors.dark.orange.500}'
        }
      },
      400: {
        value: {
          base: '{colors.light.orange.400}',
          _dark: '{colors.dark.orange.400}'
        }
      },
      300: {
        value: {
          base: '{colors.light.orange.300}',
          _dark: '{colors.dark.orange.300}'
        }
      },
      200: {
        value: {
          base: '{colors.light.orange.200}',
          _dark: '{colors.dark.orange.200}'
        }
      },
      100: {
        value: {
          base: '{colors.light.orange.100}',
          _dark: '{colors.dark.orange.100}'
        }
      },
      50: {
        value: {
          base: '{colors.light.orange.50}',
          _dark: '{colors.dark.orange.50}'
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
      800: {
        value: {
          base: '{colors.light.green.800}',
          _dark: '{colors.dark.green.800}'
        }
      },
      700: {
        value: {
          base: '{colors.light.green.700}',
          _dark: '{colors.dark.green.700}'
        }
      },
      600: {
        value: {
          base: '{colors.light.green.600}',
          _dark: '{colors.dark.green.600}'
        }
      },
      500: {
        value: {
          base: '{colors.light.green.500}',
          _dark: '{colors.dark.green.500}'
        }
      },
      400: {
        value: {
          base: '{colors.light.green.400}',
          _dark: '{colors.dark.green.400}'
        }
      },
      300: {
        value: {
          base: '{colors.light.green.300}',
          _dark: '{colors.dark.green.300}'
        }
      },
      200: {
        value: {
          base: '{colors.light.green.200}',
          _dark: '{colors.dark.green.200}'
        }
      },
      100: {
        value: {
          base: '{colors.light.green.100}',
          _dark: '{colors.dark.green.100}'
        }
      },
      50: {
        value: {
          base: '{colors.light.green.50}',
          _dark: '{colors.dark.green.50}'
        }
      }
    }
  },
  sizes: {
    lineLength: {
      value: '800px'
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
})
