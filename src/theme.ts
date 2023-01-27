import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",

    h1: {
      fontWeight: 700,
      fontSize: 32,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 24,
      }
    },
    h2: {
      fontWeight: 700,
      fontSize: 27,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 20,
      }
    },
    h3: {
      fontWeight: 600,
      fontSize: 24,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 20,
      }
    },
    h4: {
      fontWeight: 600,
      fontSize: 20,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 16,
      }
    },
    h5: {
      fontWeight: 600,
      fontSize: 18,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 14,
      }
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 16,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 14,
      }
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 14,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 12,
      }
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 14,
      }
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 12,
      }
    },
    caption: {
      fontWeight: 400,
      fontSize: 10,
    },
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#0F52BA',
    },
    secondary: {
      main: '#656565',
      light: '#E7EAED',
    },
    background: {
      default: '#FFF',
    },
    text: {
      primary: '#2C2C2C'
    }
  }
});
