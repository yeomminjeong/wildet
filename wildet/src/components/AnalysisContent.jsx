import React from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import styles from "./css/AnalysisContent.module.css";

const AnalysisContent = () => {
  return (
    <div className={styles.analysiscontent}>
      <div className={styles.content}>
        <img
          className={styles.illustrationIcon}
          alt=""
          src="../illustration@2x.png"
        />
      </div>
      <div className={styles.barsNavBarsStandard}>
        <div className={styles.title}>W I L D E T</div>
        <div className={styles.rightActionable}>Action</div>
        <img
          className={styles.leftActionableIcon}
          alt=""
          src="../left-actionable.svg"
        />
      </div>
      <div className={styles.partialsOverlay} />
      <div className={styles.viewsBottomSheetslight} alt="" src="" />
      <Link to="/Album">
        <button className={styles.controlsButtons1}>
          <div className={styles.text2}>앨범에서 선택</div>
        </button>
      </Link>

      <Link to="/WebCamVideo">
        <button className={styles.controlsButtons2}>
          <div className={styles.text3}> 동영상 촬영</div>
        </button>
      </Link>
    </div>
  );
};

export default AnalysisContent;
