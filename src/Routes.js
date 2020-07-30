import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Nav from "./Components/Nav/Nav";
import Mapcomponent from "./Pages/Productmap/Mapcomponent";
import ProductList from "./Pages/ProductList/ProductList";
import Productdetails from "./Pages/Product/Productdetails";

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
          <Route exact path="/skin" component={ProductList} />
          <Route exact path="/skin/details/:id" component={Productdetails} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
