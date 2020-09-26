import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import TabelaStudente from "./components/Burger/TabelaStudenata/TabelaStudente";
import Vesti from "./components/Burger/Vesti/Vesti";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signed: false,
    };
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({ signed: true });
  }
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <div>
            <Layout />
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/studenti" component={TabelaStudente}></Route>
              <Route path="/auth" component={Auth} />
              <Route path="/logout" component={Logout} />
              <Route
                path="/"
                component={() => <Vesti isAuth={this.props.isAuthenticated} />}
              />
            </Switch>{" "}
          </div>
        ) : (
          <Auth isAuth={this.props.isAuthenticated} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(App);
