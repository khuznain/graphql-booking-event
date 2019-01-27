import React, { Component } from "react";
import LoginForm from "../components/LoginForm";

const FromField = {
  email: "",
  password: ""
};

class Auth extends Component {
  state = {};
  render() {
    return (
      <div className="login-container">
        <div className="card-wrapper">
          <div className="card-content">
            <LoginForm user={FromField} />
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
