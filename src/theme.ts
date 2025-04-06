'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f6147',
    },
    secondary: {
      main: '#7ce6dd',
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
})

export default theme