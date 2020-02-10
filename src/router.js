import React, { Component } from "react";
import { routerList, cacheRouterList } from "./routers/routerIndex";
import Login from "./view/login/login";
import NotFound from "./view/notFound";
import Layout from "./view/layout/layoutIndex";
import { Router, Route, Switch } from "react-router-dom";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";
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
                <CacheSwitch>
                  {cacheRouterList.map((item, index) => {
                    return (
                      <CacheRoute
                        key={index}
                        path={item.path}
                        exact
                        render={props => <item.component {...props} />}
                      />
                    );
                  })}
                  {routerList.map((item, index) => {
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
                </CacheSwitch>
              </Layout>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default ERouter;
