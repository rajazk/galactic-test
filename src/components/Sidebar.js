import React from 'react'
import { accountSetting } from "./utils/constants";
import { Link, useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="sidebar">
      <ul className="menu">
        {accountSetting.map((item, index) => {
          return (
            <li key={index}>
              <Link className={`menu-item ${pathname === item.link ? "selected" : ""}`} to={item.link}>{item.label}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
