import React, { Component } from 'react';
import './app.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue, deepOrange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepOrange
  }
});

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
          <Button variant="raised" color="primary">
            Host New Game
          </Button>
          <Button variant="contained" color="secondary">
            Join Game
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}
