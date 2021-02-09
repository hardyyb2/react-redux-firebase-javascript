import { Redirect } from "react-router-dom";

import styles from "./Login.module.css";

const LoginPage = ({ isAuthenticated, loginUserConnect }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <button onClick={loginUserConnect} className={styles.loginButton}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
