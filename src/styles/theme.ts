import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    dark: {
      "50": "#999999",
      "500": "#47585B",
      "1000": "#000000",
    },
    light: {
      "0": "#FFFFFF",
      "50": "#F5F8FA",
      "100": "#DADADA",
    },
    yellow: {
      "500": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.50',
        color: 'dark.500'
      }
    }
  }
})

