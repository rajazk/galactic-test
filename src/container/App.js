import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./login/Login";
import Profile from "../components/Profile";
import SecureRoute from "../components/SecureRoute";
import MainLayout from "../components/layout/MainLayout";
import Home from "./Home";

function App(props) {

  const props1 = {
    isAuthenticated: props.isAuthenticated,
  };

  return <div className="App">
    <Router>
      <Switch>
        <Route exact path="/login" component={() => <Login />} />
        <MainLayout>
          <SecureRoute
            exact
            path="/home"
            {...props1}
            component={() => <Home />}
          />
          <SecureRoute
            path="/"
            {...props1}
            component={() => <Profile />}
          />
        </MainLayout>
      </Switch>
    </Router>
  </div>;
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.userLogin.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);