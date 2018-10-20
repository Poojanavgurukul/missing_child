import React from "react";
import axios from "axios";
import { Redirect } from "react-router";


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailid: "",
      password: "",
      redirect: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };
  setRedirt = () => {
    this.setState({
      redirect: true
    });
  };
  login = e => {
    e.preventDefault();
    const emailid = this.state.emailid;
    const password = this.state.password;

    const user = {
      emailid,
      password
    };
    console.log(user);
    axios
     .post("https://missingchild.herokuapp.com/user/login", user)
     .then(res=>{
         console.log(res);
         this.setState({
             message:res.user
         });
     })
     .catch(err=>{
         console.log(err)
     })
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: this.state
          }}
        />
      );
    }
  };

  render() {
    return (
      <div style={{ marginTop: "150px" }}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form className="form-group">
            <input
              type="email"
              name="emailid"
              placeholder="Email"
              className="form-control"
              style={{ margin: "15px", width: "300px" }}
              onChange={this.onChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              style={{ margin: "15px", width: "300px" }}
              onChange={this.onChange}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="btn btn-danger"
                style={{ margin: "10px", padding: "10px", width: "100px" }}
                onChange={this.onChange}
                onClick={this.login}
                onClick={this.setRedirt}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        {this.renderRedirect()}
      </div>
    );
  }
}

export default Login;
