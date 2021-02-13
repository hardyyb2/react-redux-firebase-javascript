import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authOperations } from "../store/operations";

import styles from "../styles/PageStyles/Login.module.css";

const LoginPage = () => {
  const {
    auth: { isAuthenticated },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <button
        onClick={() => dispatch(authOperations.loginUser())}
        className={styles.loginButton}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
