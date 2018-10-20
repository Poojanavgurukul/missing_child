import React from "react";
import HomePage from "./component/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from './component/loginpage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
