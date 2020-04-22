import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#333',
      white: '#fff',
    },
    primary: {
      main: '#00b2c9',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
