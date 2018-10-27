import React from "react";
import HomePage from "./component/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/loginpage";
import Description from "./component/description";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/description" component={Description} />
        </div>
      </Router>
    );
  }
}

export default App;
