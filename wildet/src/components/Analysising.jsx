import React from "react";

import styles from "./css/Analysising.module.css";

const Analysising = () => {
  return (
    <div className={styles.analysising}>
      <div className={styles.content}>
        <img className={styles.bufferingIcon} alt="" src="buffering.png" />
        <div className={styles.info}>
          <div className={styles.text}>
            <b className={styles.text_b}>객체 인식 중</b>
            <div className={styles.div}>잠시만 기다려주세요.</div>
          </div>
        </div>
      </div>
      <div className={styles.barsNavBarsStandard}>
        <div className={styles.title}>W I L D E T</div>
        <div className={styles.rightActionable}>Action</div>
      </div>
    </div>
  );
};

export default Analysising;
