import { useDispatch, useSelector } from "react-redux";

import { Image } from "../common";
import { Logout } from "../components";
import { UserImage } from "./../assets/images";

import { authOperations } from "../store/operations";

import styles from "../styles/PageStyles/Home.module.css";

const HomePage = () => {
  const {
    auth: { user },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.welcomeTextContainer}>
        <center>
          <Image src={user?.photoURL || UserImage} alt="User" radius={"50%"} />
        </center>
        Welcome, {user?.displayName}
      </div>
      <Logout handleLogout={() => dispatch(authOperations.logoutUser())} />
    </div>
  );
};

export default HomePage;
