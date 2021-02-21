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
      /** If the user is being verified, show a Spinner/Loader */
      isVerifying ? (
        <Spinner />
      ) : isAuthenticated ? (
        /** If succesfully authed render the component inside the layout */
        <ProtectedLayout>
          <Component {...props} />
        </ProtectedLayout>
      ) : (
        /** else if not authed, redirect to login page */
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
