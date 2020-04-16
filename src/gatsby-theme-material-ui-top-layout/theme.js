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
});

export default theme;
