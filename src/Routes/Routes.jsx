import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { ProtectedRoute } from ".";
import { Spinner } from "../common";

const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));

const Routes = ({ isAuthenticated, isVerifying }) => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <ProtectedRoute
          exact
          path="/"
          component={Home}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <Route path="/login" component={Login} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
