import styles from "./Logout.module.css";

const Logout = ({ handleLogout }) => {
  return (
    <div>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
