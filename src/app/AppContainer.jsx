import { connect } from "react-redux";

import { authOperations } from "../store/operations";

import App from "./App";

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isVerifying: state.auth.isVerifying,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyUserConnect: () => dispatch(authOperations.verifyUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
