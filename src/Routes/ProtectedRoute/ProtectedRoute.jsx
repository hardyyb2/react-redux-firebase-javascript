import { Route, Redirect } from "react-router-dom";

import { Spinner } from "../../common";
import { Layout as ProtectedLayout } from "../../layout";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isVerifying ? (
        <Spinner />
      ) : isAuthenticated ? (
        <ProtectedLayout>
          <Component {...props} />
        </ProtectedLayout>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
