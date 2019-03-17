import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <Button component={Link} to={routes.HOST} variant="contained" color="primary">
          Host New Game
        </Button>
        <Button component={Link} to={routes.HOST} variant="contained" color="secondary">
          Join Game
        </Button>

        <div>Device Test!</div>
        <MediaQuery query="(min-device-width: 1224px)">
          <div>You are on a desktop or laptop</div>
          <MediaQuery query="(min-device-width: 1824px)">
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery query="(max-width: 1224px)">
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <div>You are on a tablet or mobile phone</div>
        </MediaQuery>
        <MediaQuery query="(orientation: portrait)">
          <div>You are portrait</div>
        </MediaQuery>
        <MediaQuery query="(orientation: landscape)">
          <div>You are landscape</div>
        </MediaQuery>
      </div>
    );
  }
}

export default Landing;
