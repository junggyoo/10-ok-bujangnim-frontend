import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Nav from "./Pages/Main/Nav";
import Mapcomponent from "./Pages/Productmap/Mapcomponent";
import Underbar from "./Pages/Underbar/Underbar";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/Mapcomponent" component={Mapcomponent} />
          <Route exact path="/Underbar" component={Underbar} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;




