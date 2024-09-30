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
    },
  },
});

export default theme;
