import { useEffect } from "react";

import { Routes } from "../Routes";

import "../styles/GlobalStyles.css";
import "../styles/TypoGraphy.css";

import styles from "./App.module.css";

const App = ({ isVerifying, isAuthenticated, verifyUserConnect }) => {
  useEffect(() => {
    verifyUserConnect();
  }, []);

  return (
    <div className={styles.App}>
      <Routes isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
    </div>
  );
};

export default App;
