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
})
