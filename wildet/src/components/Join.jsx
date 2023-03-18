import React, { useCallback, useState } from "react";
import styles from "./css/Join.module.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authService } from "../api/firebase";

const Join = () => {
  //이메일, 비밀번호, 비밀번호 확인
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //function
  const onAuthEmail = (e) => {
    createUserWithEmailAndPassword(authService, email, password);
  };

  //유효성 검사
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  //function
  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);
    if (password === passwordConfirmCurrent) {
      setIsPasswordConfirm(true);
    } else {
      setIsPasswordConfirm(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  //routing
  const navigate = useNavigate();

  return (
    <div className={styles.join}>
      <div className={styles.barsNavBarsStandard}>
        <div className={styles.title}>회원가입</div>
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
      {/* <div className={styles.controlsDd}>
        <div className={styles.partialsTextFieldFloatin}>
        <input className={styles.text} type="text" placeholder="dd"></input>
        </div>
      </div>
      <div className={styles.controlsMm}>
        <div className={styles.partialsTextFieldFloatin}>
          <input className={styles.text} type="text" placeholder="mm"></input>
        </div>
      </div>
      <div className={styles.controlsYy}>
        <div className={styles.partialsTextFieldFloatin}>
          <input className={styles.text} type="text" placeholder="yy"></input>
        </div>
      </div>
      <div className={styles.joinChild} /> */}
      {/* <div className={styles.controlsName}> */}
      {/* <div className={styles.partialsTextFieldFloatin3}>
          <input
            className={styles.text}
            type="text"
            placeholder="이름을 입력해주세요"
          ></input>
        </div> */}
      {/* </div> */}
      <form onSubmit={onSubmit}>
        <div className={styles.controlsId}>
          <div className={styles.partialsTextFieldFloatin3}>
            <input
              className={styles.text}
              type="email"
              placeholder="아이디를 입력해주세요"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.controlsPassword}>
          <div className={styles.partialsTextFieldFloatin3}>
            <input
              className={styles.text}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
              value={password}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.controlsPasswordcheck}>
          <div className={styles.partialsTextFieldFloatin3}>
            <input
              className={styles.text}
              type="password"
              placeholder="비밀번호를 확인해주세요"
              required
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
          </div>
        </div>
      </form>

      <div className={styles.partialsTextFieldFloatin1}>
        {isPasswordConfirm === true ? (
          <div className={styles.text1}>비밀번호가 같습니다.</div>
        ) : (
          <div className={styles.text1}>비밀번호가 틀렸습니다!</div>
        )}
      </div>

      {/* <div className={styles.div}>생년월일</div> */}
      {/* <div className={styles.div1}>이름</div> */}
      <div className={styles.div4}>이메일</div>
      <div className={styles.div3}>비밀번호</div>
      <div className={styles.div2}>비밀번호 확인</div>
      <Link to="/AnalysisPage">
        <button
          className={styles.controlsJoinbuttons}
          type="submit"
          onClick={() => {
            isPasswordConfirm === true
              ? onAuthEmail()
              : alert("비밀번호를 확인해주세요!");
          }}
        >
          <div className={styles.text7}>가입하기</div>
        </button>
      </Link>
      <div className={styles.joinItem} />
    </div>
  );
};

export default Join;
