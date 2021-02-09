import { connect } from "react-redux";

import { loginUser } from "../../store/operations";

import LoginPage from "./LoginPage";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUserConnect: () => dispatch(loginUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
