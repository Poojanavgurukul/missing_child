import React from "react";
import axios from "axios";
import { Redirect } from "react-router";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      emailid: "",
      password: "",
      address: "",
      state: "",
      city: "",
      mobile: "",
      pincode: "",
      gender: "",
      redirect: ""
    };
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value)
  };
  setRedirt = () => {
    this.setState({
      redirect: true
    });
  };

  submit = e => {
    e.preventDefault();
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const emailid = this.state.emailid;
    const password = this.state.password;
    const address = this.state.address;
    const state = this.state.state;
    const city = this.state.city;
    const mobile = this.state.mobile;
    const pincode = this.state.pincode;
    const gender = this.state.gender;

    const user = {
      firstname,
      lastname,
      emailid,
      password,
      address,
      state,
      city,
      mobile,
      pincode,
      gender
    };
    console.log(user);
    axios
      .post("https://missingchild.herokuapp.com/signup", user)
      .then(res => {
        console.log(res);
        this.setState({
          message: res.user
        });
      })
      .catch(err => {
        console.log(err);
      });
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
      <div>
        <h1 style={{textAlign:"center"}}>SIGN UP</h1>
        <div style={{display:"flex",justifyContent:"center"}}>
          <form className="form-group">
            <div>
              <input
                type="text"
                name="firstname"
                placeholder="Firstname"
                ref={input => (this.firstname = input)}
                onChange={this.inputHandler}
                className="form-control"
                style={{margin:"15px",width:"300px"}}
              />
            </div>
            <div>
              <input
                type="text"
                name="lastname"
                placeholder="Lastname"
                ref={input => (this.lastname = input)}
                onChange={this.inputHandler}
                className="form-control"
                style={{margin:"15px",width:"300px"}}
              />
            </div>
            <div>
              <input
                type="text"
                name="mobile"
                placeholder="Enter Mobile Number"
                ref={input => (this.mobile = input)}
                onChange={this.inputHandler}
                className="form-control"
                style={{margin:"15px",width:"300px"}}
              />
            </div>
            <div>
              <input
                type="email"
                name="emailid"
                placeholder="Email"
                ref={input => (this.emailid = input)}
                onChange={this.inputHandler}
                className="form-control"
                style={{margin:"15px",width:"300px"}}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={input => (this.password = input)}
                onChange={this.inputHandler}
                className="form-control"
                style={{margin:"15px",width:"300px"}}
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                ref={input => (this.address = input)}
                onChange={this.inputHandler}
                className="form-control"
                style={{margin:"15px",width:"300px"}}
              />
            </div>
            <div>
              <input
                type="text"
                name="state"
                placeholder="State"
                ref={input => (this.State = input)}
                onChange={this.inputHandler}
                className="form-control"
                style={{margin:"15px",width:"300px"}}
              />
            </div>
            <div>
              <input
                type="text"
                name="city"
                placeholder="city"
                ref={input => (this.city = input)}
                onChange={this.inputHandler}
                className="form-control"
                style={{margin:"15px",width:"300px"}}
              />
            </div>
            <div>
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                ref={input => (this.pincode = input)}
                onChange={this.inputHandler}
                className="form-control"
                style={{margin:"15px",width:"300px"}}
              />
            </div>
            <div>
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                ref={input => (this.gender = input)}
                onChange={this.inputHandler}
                className="form-control"
                style={{margin:"15px",width:"300px"}}
              />
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
              <input
                type="button"
                value="Sign Up"
                onClick={this.submit}
                onClick={this.setRedirt}
                className="btn btn-danger"
                style={{margin:"10px",padding:"10px",width:"100px"}}
              />
            </div>
            {this.renderRedirect()}
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
