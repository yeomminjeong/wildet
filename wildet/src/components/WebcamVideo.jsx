import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import Analysising from "./Analysising";

export default function WebcamVideo() {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleStartRecording = () => {
    setRecording(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream);
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      const videoBlob = new Blob([event.data], { type: "video/mp4" });
      const formData = new FormData();
      formData.append("file", videoBlob);
      setIsLoading(true);
      axios
        .post("http://localhost:5000/detect", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
          responseType: "blob", // blob 유형으로 응답 받음
        })
        .then((response) => {
          console.log("성공");

          const videoBlob = new Blob([response.data], {
            type: "video/mp4",
          });

          setIsLoading(false);

          const videoUrl1 = URL.createObjectURL(videoBlob); // URL 객체로 변환
          setVideoUrl(videoUrl1);

          // const a = document.createElement("a");
          // a.href = videoUrl1;
          // const videoName = `video_${new Date().getTime()}.mp4`;
          // a.download = videoName;
          // a.click();
        });
    }
  };

  console.log(videoUrl);

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
  };

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  // const handleVideoLoaded = (event) => {
  //   event.target.play();
  // };

  return (
    <div className="Container">
      {isLoading ? (
        <div
          style={{
            color: "white",
          }}
        >
          객체 인식 중
        </div>
      ) : (
        <>
          {videoUrl ? (
            <button
              onClick={() => {
                const a = document.createElement("a");
                a.href = videoUrl;
                const videoName = `video_${new Date().getTime()}.mp4`;
                a.download = videoName;
                a.click();
              }}
            >
              다운로드
            </button>
          ) : (
            <Webcam
              height={400}
              width={400}
              audio={false}
              mirrored={true}
              ref={webcamRef}
              videoConstraints={videoConstraints}
            />
          )}
          {recording ? (
            <button onClick={handleStopRecording}>Stop Recording</button>
          ) : (
            <button onClick={handleStartRecording}>Start Recording</button>
          )}
        </>
      )}
    </div>
  );
}
