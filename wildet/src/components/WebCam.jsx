import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./css/WebCam.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function WebCam() {
  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    facingMode: { exact: "environment" },
  };

  return (
    <div className="WebCam">
      <Webcam />
      <Webcam imageSmoothing={true} />
      <Webcam audio={true} />
      <Webcam width={480} height={720} videoConstraints={videoConstraints} />
      {/* <Webcam screenshotFormat="image/webp" />
      <Webcam mirrored={false} />
      <Webcam mirrored={true} /> */}
    </div>
  );
}

export default WebCam;
