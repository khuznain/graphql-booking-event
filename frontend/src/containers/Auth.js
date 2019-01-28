import React, { Component } from "react";
import LoginContainer from "../components/LoginForm";

class Auth extends Component {
  state = {};
  render() {
    return (
      <div className="login-container">
        <div className="card-wrapper">
          <div className="card-content">
            <LoginContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
