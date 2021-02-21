import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { ProtectedRoute } from ".";
import { Spinner } from "../common";

/** Import lazily to improve code splitting */
const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));
const NotFound = lazy(() => import("../pages/404"));

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
    exact: true,
    isProtected: false,
  },
];

const Routes = ({ isAuthenticated, isVerifying }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {routes &&
          routes.map(({ component, path, exact, isProtected }) =>
            isProtected ? (
              <ProtectedRoute
                key={path}
                exact={exact}
                path={path}
                component={component}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
              />
            ) : (
              <Route
                key={path}
                exact={exact}
                path={path}
                component={component}
              />
            )
          )}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
