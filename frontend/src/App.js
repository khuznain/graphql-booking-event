import ApolloClient from "apollo-boost";
import React, { Component, Fragment } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import TopNavigation from "./components/Navigation/Navigation";
import Auth from "./containers/Auth";
import Booking from "./containers/Booking";
import Event from "./containers/Event";

const client = new ApolloClient({
  uri: "http://localhost/8000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Fragment>
            <TopNavigation />
            <div class="main-container container h-100">
              <Switch>
                <Redirect from="/" to="/auth" exact />
                <Route path="/auth" component={Auth} />
                <Route path="/events" component={Event} />
                <Route path="/booking" component={Booking} />
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
