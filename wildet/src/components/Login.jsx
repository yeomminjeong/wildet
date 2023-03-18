import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import styles from "./css/LoginEmail.module.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { authService } from "../api/firebase";
import AppRouter from "./Router";

//소셜 로그인 - google
const onSocialClick = (e) => {
  let provider = " ";
  if (e.target.name === "google") {
    provider = new GoogleAuthProvider();
  }
  signInWithPopup(authService, provider);
};

const Login = () => {
  //이메일, 비밀번호
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  //function
  const onSignIn = (e) => {
    signInWithEmailAndPassword(authService, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  //routing
  const navigate = useNavigate();

  return (
    <div className={styles.loginemail} id="login">
      <form onSubmit={onSubmit}>
        <input
          className={styles.emailText}
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={styles.pwdText}
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
      <Link to="/">
        <button
          className={styles.loginBtn}
          // type="submit"
          onClick={onSignIn}
        >
          <div className={styles.text}>로그인</div>
        </button>
      </Link>

      <Link to={"/"}>
        <button
          className={styles.googleBtn}
          name="google"
          onClick={onSocialClick}
        >
          <div className={styles.text3}>Google</div>
        </button>
      </Link>

      {/* <button className={styles.kakaoBtn}>
        <div className={styles.text1}>카카오톡 로그인</div>
      </button> */}

      <div className={styles.byContinuingYouContainer}>
        <span className={styles.byContinuingYouContainer1}>
          <span
            className={styles.byContinuingYou}
          >{`By continuing, you agree to our `}</span>
          <span className={styles.termsOfService}>Terms of Service</span>
          <span className={styles.byContinuingYou}>{` and `}</span>
          <span className={styles.termsOfService}>Privacy Policy</span>
          <span className={styles.byContinuingYou}>.</span>
        </span>
      </div>
      <Link to="/Join">
        <div className={styles.div}>회원가입</div>
      </Link>
      <div className={styles.barsNavBarsStandard}>
        <div className={styles.title}>로그인</div>
        <div className={styles.rightActionable}>Forgot Password</div>
        <img
          className={styles.leftActionableIcon}
          alt=""
          src="https://d1xzdqg8s8ggsr.cloudfront.net/63e220c02b248b7215f5121f/1326c72b-9975-4f33-bcc1-4538d637baa5_1675765328054041386?Expires=-62135596800&Signature=EFTEiiYPJ~87QTtFOV5xjtyvWPwCohjL3xell8ALTf3NouD2AWuryKNHH7qJSsuh7B3dAWKyCh32oRmTIiDydfFERk~Gd6HKikJbVDEYZAom5FKyhaZVXCYNaeRFtfyqmpzMn~8YoSqSXeX8WX30ClYKdgd4p2nVAH2CFH5OW9rzlm-B1LPtrnKAAxupw0AjErk6nqtyW0cn0OL-sgWSqhSF2J27D0P8izFI2A0v~crGBCbSg4Ca9tPDOxm6XRgdgNLUHe76dq80qX3tCikjc-a0pF~00OL2lco2W4F8DFqU0qBU2c6j9-0KmKd4DM3HRSuGeC1hi-5-w9AfnpjZDw__&Key-Pair-Id=K1P54FZWCHCL6J"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
    </div>
  );
};

export default Login;
