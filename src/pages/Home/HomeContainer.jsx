import { connect } from "react-redux";

import { logoutUser } from "../../store/operations";

import HomePage from "./HomePage";

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUserConnect: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
