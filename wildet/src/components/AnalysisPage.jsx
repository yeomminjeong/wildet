import React from "react";

import styles from "./css/AnalysisPage.module.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
const AnalysisPage = () => {
  return (
    <div className={styles.analysispage}>
      <div className={styles.content}>
        <img
          className={styles.illustrationIcon}
          alt=""
          src="https://d1xzdqg8s8ggsr.cloudfront.net/63e229e22b248b7215f51341/008b2e24-611d-4237-b140-f490949780ef_1675767989322919469?Expires=-62135596800&Signature=poeQxCoRjOdvi08PrFONe1Xk7SHRojuKXBndu~iELJLLPC~dT~rpTKlx7G~5AT2PaKnRyJjRm0-Gxt36omX1yhfLdyOP6vNKp4GkD9dNEmBnPs9r5DcOa0-1PaF1KQ0u08dVZohpEq6dvwlPsfELKwlakGx50OcABzqVvPy5udYbwGmea2m3tcDQCyCVBpNk5Eowud3xWiP7NMvfERwSZDVTU3B-HWaZie5s6ZpxJxr8myJkC0y9wb8BxcLpD7y3MJwzlnw4wUF5IxQAjf0vpkw79oVtmTUKIJzsVQW5aG23YR2Lq9ksbvawUPonv3dIKVF78803244apfqnZOJDmQ__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <div className={styles.content1}>
          <div className={styles.text}>
            <b className={styles.b}>어떤 동물일까요?</b>
            <div className={styles.div}>
              버튼을 클릭해서 야생동물 객체 탐지를 시작해보세요.
            </div>
          </div>
          <Link to="/AnalysisContent">
            <div className={styles.controlsButtons}>
              <div className={styles.text1}>촬영하기</div>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.barsNavBarsStandard}>
        <div className={styles.title}>W I L D E T</div>
      </div>

      {/* <div className={styles.barsTabBarIcon}>
        <img className={styles.partialsTabBarIconOnly} src="homeicon.png" />
        <img className={styles.partialsTabBarIconOnly} src="analyicon.png" />
        <img className={styles.partialsTabBarIconOnly} src="profileicon.png" />
      </div> */}

      <div className={styles.TabBar}>
        <div className={styles.partialsTabBarIconOnly}>
          <Link to="/">
            <img className={styles.icons} src="homeIcon.png" />
          </Link>
        </div>

        <div className={styles.partialsTabBarIconOnly}>
          <img className={styles.icons} src="analyIcon.png" />
        </div>
        <div className={styles.partialsTabBarIconOnly}>
          <Link to="/Profile">
            <img className={styles.icons} src="profileIcon.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
