import React from "react";
import "../component/home.css";
import Navbar from "./navbar";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <h1>{this.props.location.state.firstname} {this.props.location.state.lastname}</h1> */}
        <button className="btn1 btn btn-danger">+</button>
      </div>
    );
  }
}

export default HomePage;
