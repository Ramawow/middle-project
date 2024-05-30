import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { colors } from './colors'
import { LinkStyle as Link } from './LinkStyle'
import { ContainerStyle as Container } from './ContainerStyle'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  fonts: {
    heading: 'Mulish',
    body: 'Mulish',
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#fff',
        color: 'gray.600',
        minHeight: '100vh',
      },
    },
  },
  colors,
  components: {
    Link,
    Container,
  },
  config,
})

export default theme
