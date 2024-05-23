import { createTheme, responsiveFontSizes } from '@mui/material';

export let theme = createTheme({
  typography: {
    h1: {
      fontSize: '7rem',
    },
  },

  // typography: {
  //   h1: {
  //     '@media (max-width:1200px)': {
  //       fontSize: '5rem',
  //     },
  //     '@media (max-width:900px)': {
  //       fontSize: '4rem',
  //     },
  //     '@media (max-width:600px)': {
  //       fontSize: '3rem',
  //     },
  //   },
  // },
});

theme = responsiveFontSizes(theme);
