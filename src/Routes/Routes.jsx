import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { ProtectedRoute } from ".";
import { Spinner } from "../common";

const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));

const routes = [
  {
    component: Home,
    path: "/",
    exact: true,
    isProtected: true,
  },
  {
    component: Login,
    path: "/login",
    exact: false,
    isProtected: false,
  },
];

const Routes = ({ isAuthenticated, isVerifying }) => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        {routes &&
          routes.map(({ component, path, exact, isProtected }, index) =>
            isProtected ? (
              <ProtectedRoute
                exact={exact}
                path={path}
                component={component}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
              />
            ) : (
              <Route path={path} component={component} />
            )
          )}
      </Suspense>
    </Switch>
  );
};

export default Routes;
