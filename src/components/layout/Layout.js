import React from "react";
import Sidebar from "../Sidebar";
import './layout.css'

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <div className="wrapper">
        <div className="profile-header">
          <h2>Account settings</h2>
        </div>
        <div className="profile-main">
          <Sidebar />
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
