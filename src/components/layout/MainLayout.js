import React from "react";
import Header from "../header/Header";
import "./layout.css";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  )
}

export default MainLayout;