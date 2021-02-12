import { useDispatch, useSelector } from "react-redux";

import { Image } from "../common";
import { Logout } from "../components";
import { UserImage } from "./../assets/images";

import { logoutUser } from "../store/operations";

import styles from "../styles/PageStyles/Home.module.css";

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  console.log(user);
  return (
    <div>
      <div className={styles.welcomeTextContainer}>
        <center>
          <Image src={user?.photoURL || UserImage} alt="User" radius={"50%"} />
        </center>
        Welcome, {user?.displayName}
      </div>
      <Logout handleLogout={() => dispatch(logoutUser())} />
    </div>
  );
};

export default HomePage;
