import React, { Component } from "react";
import AppContext from "./contextlayer.jsx";

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Gringotts Bank"
    };
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default Provider;
