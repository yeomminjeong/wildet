import React, { useEffect, useState } from "react";
import "./App.css";
import { authService } from "./api/firebase";
import { onAuthStateChanged } from "firebase/auth";

import AppRouter from "./components/Router";

function App() {
  //firebase 초기화
  const [init, setInit] = useState(false);

  //로그인 회원 확인
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = authService.currentUser;

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  console.log(user);

  return <>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing"}</>;
}
export default App;
