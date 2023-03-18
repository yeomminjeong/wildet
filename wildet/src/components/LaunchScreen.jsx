import React from "react";
import styles from "./css/LaunchScreen.module.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const LaunchScreen = () => {
  return (
    <div className={styles.launchScreen} id="main">
      <div className="logo">
        <img className={styles.pepe_logo} alt="" src="mountain.png" />
      </div>
      <b className={styles.title}>W I L D E T</b>
      <div className={styles.petParents}>wildlife detect</div>
      <div className={styles.controlsButtons}>
        <Link to="/Login">
          <div className={styles.text}>시작하기</div>
        </Link>
      </div>
    </div>
  );
};

export default LaunchScreen;
