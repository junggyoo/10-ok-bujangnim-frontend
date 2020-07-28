import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Sign from "./Pages/Login/Signup";
import ProductList from "./Pages/ProductList/ProductList";
import Productdetails from "./Pages/Product/Productdetails";
import Mapcomponent from "./Pages/Productmap/Mapcomponent";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Sign} />
          <Route exact path="/Mapcomponent" component={Mapcomponent} />
          <Route exact path="/skin" component={ProductList} />
          <Route exact path="/skin/details" component={Productdetails} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
