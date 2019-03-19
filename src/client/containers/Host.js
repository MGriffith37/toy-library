import React, { Component } from 'react';
import {
  AppBar, Card, Typography, Button, TextField
} from '@material-ui/core';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Wrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled(Card)``;

const StyledButton = styled(Button)``;

const StyledTextField = styled(TextField)``;

const StyledDiv = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 5vh;
  margin-left: 20vh;
  margin-right: 20vh;
`;

const StyledTextList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTeamTitle = styled.div`
  font-family: 'Montserrat';
  font-size: 5vh;
`;

class Host extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Wrapper className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <StyledDiv>
          <StyledTeamTitle>Host Page</StyledTeamTitle>
          <StyledTextField id="select-game" label="Select Game" margin="normal" />
          <StyledTextField id="player-numbers" label="Number of Players" margin="normal" />
          <StyledButton variant="contained" color="primary">
            Host Game
          </StyledButton>
        </StyledDiv>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(Host);
