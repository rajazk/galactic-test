import React from "react";
import "./api.css";

const Api = () => {
  return (
    <div>
      <div className="head">
        <h3 className="title">General</h3>
        <span>Click field boxes to edit and then save your changes.</span>
      </div>
      <div className="key-info">
        <h4>Your unique key</h4>
        <input type="text" placeholder="0000-0000-0000-0000-0000" />
      </div>
      <div className="save-changes">
        <button>Generate key</button>
      </div>
    </div>
  )
}

export default Api
