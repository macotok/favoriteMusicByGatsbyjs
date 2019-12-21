import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3B3B58',
      dark: '#6B6A8A',
      light: '#ABA9BC',
    },
    secondary: {
      main: '#ABA9BC',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    }
  }
});

export default theme;
