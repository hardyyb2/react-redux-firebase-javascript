import { useDispatch, useSelector } from "react-redux";

import { Logout } from "../components";
import { logoutUser } from "../store/operations";

import styles from "../styles/PageStyles/Home.module.css";

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.welcomeTextContainer}>
        Welcome, {user?.displayName}
      </div>
      <Logout handleLogout={() => dispatch(logoutUser())} />
    </div>
  );
};

export default HomePage;
