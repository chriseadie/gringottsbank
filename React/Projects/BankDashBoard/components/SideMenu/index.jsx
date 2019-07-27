import React, { Component } from "react";
import AppContext from "../contextlayer.jsx";
import "./style.css";
class SideMenu extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => <div className='side-menu-panel'>{context.name}</div>}
      </AppContext.Consumer>
    );
  }
}
export default SideMenu;
