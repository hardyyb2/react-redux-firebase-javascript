import { connect } from "react-redux";

import { verifyUser } from "../store/operations";

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
    verifyUserConnect: () => dispatch(verifyUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
