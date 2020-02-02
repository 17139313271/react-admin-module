import React, { Component } from "react";
import Routers from "./routers/routerIndex";
import Login from "./view/login/login";
import NotFound from "./view/notFound";
import Layout from "./view/layout/layoutIndex";
import { Router, Route, Switch } from "react-router-dom";
import history from "./routers/history";

class ERouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => (
              <Layout>
                <Switch>
                  {Routers.map((item, index) => {
                    return (
                      <Route
                        key={index}
                        path={item.path}
                        exact
                        render={props => <item.component {...props} />}
                      />
                    );
                  })}
                  <Route component={NotFound} />
                </Switch>
              </Layout>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default ERouter;
