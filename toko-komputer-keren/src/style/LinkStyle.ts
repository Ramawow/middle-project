import { Theme, StyleObjectOrFn } from '@chakra-ui/react'

type StyleInterpolation = StyleObjectOrFn | ((options: StyleOptions) => StyleObjectOrFn)

interface StyleOptions {
  theme: Theme
  colorMode: 'light' | 'dark'
  colorScheme: string
}

interface StyleConfig {
  baseStyle: StyleInterpolation
  // sizes: { [size: string]: StyleInterpolation }
  variants: { [variant: string]: StyleInterpolation }
  defaultProps?: {
    variant: string
    size: string
  }
}

export const LinkStyle: StyleConfig = {
  baseStyle: {
    _hover: {
      textDecoration: 'none',
    },
  },
  variants: {
    navLinkActive: {
      color: 'accent.500',
    },
  },
}
