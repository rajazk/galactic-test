import React from "react";
import { Route } from "react-router-dom";
import General from "../container/general/General";
import Api from "../container/Api/Api";
import Layout from "./layout/Layout";
import './Profile.css'

const Profile = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={() => <Layout><General /></Layout>} />
      <Route exact path="/api" component={() => <Layout><Api /></Layout>} />
    </React.Fragment>
  )
}

export default Profile;