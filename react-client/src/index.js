import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const AppWithTheme = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  )
}

ReactDOM.render(<AppWithTheme />, document.getElementById('app'));
