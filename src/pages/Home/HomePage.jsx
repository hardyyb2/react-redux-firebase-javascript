import { Logout } from "../../components";

import styles from "./Home.module.css";

const HomePage = ({ user, logoutUserConnect }) => {
  return (
    <div>
      <div className={styles.welcomeTextContainer}>
        Welcome, {user?.displayName}
      </div>
      <Logout handleLogout={logoutUserConnect} />
    </div>
  );
};

export default HomePage;
