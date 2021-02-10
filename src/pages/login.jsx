import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../store/operations";

import styles from "../styles/PageStyles/Login.module.css";

const LoginPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <button
        onClick={() => dispatch(loginUser())}
        className={styles.loginButton}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
