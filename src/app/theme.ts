'use client';

import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--noto-sans)',
  },
  palette: {
    mode: 'dark',
    background: {
      default: colors.black,
      paper: colors.black,
    },
    secondary: {
      main: colors.white,
    },
    warning: {
      main: colors.yellow,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: colors.yellow,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-roboto)',
        },
      },
    },
  },
});

export default theme;
