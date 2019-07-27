import React, { Component } from "react";
import Provider from "./Providerlayer.jsx";
import SideMenu from "./SideMenu/index.jsx";
import MenuBar from "./MainWindow/MenuBar.jsx";

class DashBoardContainer extends Component {
  render() {
    return (
      <Provider>
        <div className='app-container'>
          <div className='row m-0'>
            <div className='col-md-2 pl-0 aside-menu'>
              <SideMenu />
            </div>
            <div className='col-md-10 pl-0 main-app-card'>
              <MenuBar />
              all Cards and info will go here
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
export default DashBoardContainer;
