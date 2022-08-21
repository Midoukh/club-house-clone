import React from "react";
import styles from "../style/welcome.module.css";
import { Link } from "react-router-dom";

const Welecome = () => {
  return (
    <div className={styles.WelcomeContainer}>
      <h1>WelCome</h1>
      <div className={styles.WelcomeInfo}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
          blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat, consectetur?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className={styles.ActionButton}>
        <Link
          exact
          to="/get_username"
          className="primaryBtn d-flex align-items-center"
        >
          Get your User Name
        </Link>
        <Link exact to="/signin">
          Have an invite Text? Sign In
        </Link>
      </div>
    </div>
  );
};

export default Welecome;
