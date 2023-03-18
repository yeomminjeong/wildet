import React from "react";
import LaunchScreen from "./LaunchScreen";
import AnalysisContent from "./AnalysisContent";
import Analysising from "./Analysising";
import ResultPage from "./ResultPage";
import AnalysisPage from "./AnalysisPage";
import Join from "./Join";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import WebCam from "./WebCam";
import WebcamVideo from "./WebcamVideo";
import Profile from "./Profile";
import Album from "./Album";
export default function AppRouter({ isLoggedIn }) {
  return (
    <div className="App">
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<AnalysisPage />}></Route>
            <Route path="/AnalysisContent" element={<AnalysisContent />} />
            {/* <Route path="Analysising" element={<Analysising />} /> */}
            <Route path="AnalysisPage" element={<AnalysisPage />} />
            <Route path="ResultPage" element={<ResultPage />} />
            <Route path="WebCam" element={<WebCam />} />
            <Route path="WebcamVideo" element={<WebcamVideo />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Album" element={<Album />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LaunchScreen />} />
            <Route path="/Login" element={<Login />} />
            <Route path="Join" element={<Join />} />
          </>
        )}
      </Routes>
    </div>
  );
}
