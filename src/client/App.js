import React, { Component } from "react";
import "./app.css";
import Button from "@material-ui/core/Button";
import ReactImage from "./react.png";
import Host from "./Host.js";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return <Host />;
  }
}
