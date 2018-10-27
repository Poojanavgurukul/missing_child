import React from "react";
import "../component/home.css";
import Navbar from "./navbar";
import Cards from './cards'
import Popup from 'reactjs-popup';
import Description from "./description";





class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }
  openModal (){
    this.setState({ open: true })
  }
  closeModal () {
    this.setState({ open: false })
  }
  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{textAlign:"center",fontFamily:"'Pacifico', cursive"}}>Missing Child</h1>
        {/* <h1>{this.props.location.state.firstname} {this.props.location.state.lastname}</h1> */}
        <Cards />
        {/* <Link to ="/description"><div className="btn4"><button className="btn btn-danger btn-circle btn-xl">+</button></div></Link> */}
        <div>
                 <div className="btn4"><button className="btn btn-danger btn-circle btn-xl" onClick={this.openModal}>
                  +
                 </button>
                 </div>
                 <Popup
                   open={this.state.open}
                   closeOnDocumentClick
                   onClose={this.closeModal}
                 >
                   <div>
                     <a onClick={this.closeModal}>
                       &times;
                     </a>
                     <div>
                      <Description />
                     </div>
                   </div>
                 </Popup>
               </div>
      </div>
    );
  }
}

export default HomePage;
