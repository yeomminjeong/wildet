import React from "react";
import styles from "./css/ResultPage.module.css";

const ResultPage = () => {
  return (
    <div className={styles.resultpage}>
      <img className={styles.imageIcon} alt="" src="cat.jpg" />
      <div
        className={styles.viewsBottomSheetslight}
        // alt=""
        // src="../views--bottom-sheetslight.svg"
      />
      <button className={styles.controlsButtons}>
        <div className={styles.text}>저장하기</div>
      </button>
      <div className={styles.parent}>
        <div className={styles.div}>고양이를 진정시키려면?</div>
        <div className={styles.div1}>부드러운 목소리와 행동을 취해주세요.</div>
        <div className={styles.div2}>잠시 혼자만의 시간을 갖게 해주세요.</div>
        <div className={styles.div3}>
          고양이에게 안전한 공간을 마련해주세요.
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.div4}>
          많이 화가 난 것 같아요! 고양이를 진정시켜주세요.
        </div>
        <b className={styles.b}>분석 결과</b>
      </div>
      <div className={styles.icon}>
        <img src="x.svg" />
      </div>
    </div>
  );
};

export default ResultPage;
