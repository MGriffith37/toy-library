import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AccountIcon from "@material-ui/icons/ArrowBack";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  backButton: {
    color: "#ffffff",
    marginRight: 10
  }
});

const BackButton = ({ classes, history }) => (
  <IconButton className={classes.backButton} onClick={history.goBack}>
    <ArrowBackIcon />
  </IconButton>
);

function ButtonAppBar(props) {
  const { classes, className, history } = props;

  return (
    <AppBar position="absolute" className={className}>
      <Toolbar>
        {<BackButton classes={classes} history={history} />}
        <Typography variant="title" color="inherit" className={classes.flex}>
          This is the title
        </Typography>
        <Button color="inherit">
          <AccountIcon className={classes.leftIcon} /> Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ButtonAppBar));
