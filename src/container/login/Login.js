import React, { useState } from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from "../../store/actions/signIn";
import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    props.attemptLogin({
      email, password
    }).then(() => {
      history.push("/");
    })
  };

  return (
    <div className="Login-container">
      <div className="row-left">
        <div className="login-form">
          <h3>Log in</h3>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="ramona@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="***************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control login-button">
            <button onClick={() => handleLogin()}>Log in</button>
          </div>
        </div>
      </div>
      <div className="row-right container-img">
        <img
          src="images/science-background-with-molecule-atom-abstract-structure-science-medical-background-3d-illustration 2.png"
          alt=""
        />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (cred) => dispatch(loginUser(cred))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
