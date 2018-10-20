import React from "react";
import "../component/navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className=" navbar1 navbar navbar-dark bg-dark">
          <div className="heading">
            <h3>Missing child</h3>
          </div>
          <div style={{ marginLeft: "80%", marginTop: "-45px" }}>
            <Link to="/">
              <button className="btn2 btn btn-danger">Home</button>
            </Link>
            <Link to="/login">
              <button className="btn2 btn btn-danger">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn2 btn btn-danger">Signup</button>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
