import React from "react";
import "../component/home.css";
import Navbar from "./navbar";
import Cards from './cards'
import {Link} from 'react-router-dom';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{textAlign:"center",fontFamily:"'Pacifico', cursive"}}>Missing Child</h1>
        {/* <h1>{this.props.location.state.firstname} {this.props.location.state.lastname}</h1> */}
        <Cards />
        <Link to ="/description"><div className="btn4"><button className="btn btn-danger btn-circle btn-xl">+</button></div></Link>
      </div>
    );
  }
}

export default HomePage;
