/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './app.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue, deepOrange } from '@material-ui/core/colors';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: blue,
    secondary: deepOrange
  }
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navigation />
        </Router>
      </MuiThemeProvider>
    );
  }
}
