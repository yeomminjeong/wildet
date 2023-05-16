import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import Analysising from "./Analysising";

// export default function WebcamVideo() {
//   const webcamRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const [recording, setRecording] = useState(false);
//   const [videoUrl, setVideoUrl] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleStartRecording = () => {
//     setRecording(true);
//     mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream);
//     mediaRecorderRef.current.addEventListener(
//       "dataavailable",
//       handleDataAvailable
//     );
//     mediaRecorderRef.current.start();
//   };

//   const handleDataAvailable = (event) => {
//     if (event.data.size > 0) {
//       const videoBlob = new Blob([event.data], { type: "video/mp4" });
//       const formData = new FormData();
//       formData.append("file", videoBlob);
//       setIsLoading(true);
//       axios
//         .post("http://localhost:5000/detect", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           withCredentials: true,
//           responseType: "blob", // blob 유형으로 응답 받음
//         })
//         .then((response) => {
//           console.log("성공");

//           const videoBlob = new Blob([response.data], {
//             type: "video/mp4",
//           });

//           setIsLoading(false);

//           const videoUrl1 = URL.createObjectURL(videoBlob); // URL 객체로 변환
//           setVideoUrl(videoUrl1);

//           // const a = document.createElement("a");
//           // a.href = videoUrl1;
//           // const videoName = `video_${new Date().getTime()}.mp4`;
//           // a.download = videoName;
//           // a.click();
//         });
//     }
//   };

//   console.log(videoUrl);

//   const handleStopRecording = () => {
//     mediaRecorderRef.current.stop();
//   };

//   const videoConstraints = {
//     width: 420,
//     height: 420,
//     facingMode: "user",
//   };

//   // const handleVideoLoaded = (event) => {
//   //   event.target.play();
//   // };

//   return (
//     <div className="Container">
//       {isLoading ? (
//         <div
//           style={{
//             color: "white",
//           }}
//         >
//           객체 인식 중
//         </div>
//       ) : (
//         <>
//           {videoUrl ? (
//             <button
//               onClick={() => {
//                 const a = document.createElement("a");
//                 a.href = videoUrl;
//                 const videoName = `video_${new Date().getTime()}.mp4`;
//                 a.download = videoName;
//                 a.click();
//               }}
//             >
//               다운로드
//             </button>
//           ) : (
//             <Webcam
//               height={400}
//               width={400}
//               audio={false}
//               mirrored={true}
//               ref={webcamRef}
//               videoConstraints={videoConstraints}
//             />
//           )}
//           {recording ? (
//             <button onClick={handleStopRecording}>Stop Recording</button>
//           ) : (
//             <button onClick={handleStartRecording}>Start Recording</button>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs";

export default function WebcamVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const loadModelAndDetect = async () => {
      // TensorFlow.js 모델을 로드합니다.
      const model = await tf.loadLayersModel("../detect/tfjs_model/model.json");

      const detectObjects = () => {
        // 비디오 프레임을 캡처합니다.
        const video = videoRef.current;
        const image = tf.browser.fromPixels(video);
        const expandedImage = image.expandDims(0);

        // 객체 인식을 수행합니다.
        const predictions = model.predict(expandedImage);

        // 결과를 처리하고 화면에 실시간 객체 인식 결과를 표시하는 로직을 구현합니다.
        // predictions를 활용하여 실시간으로 객체 인식 결과를 화면에 표시하는 코드를 작성하세요.
        // 예시:
        // const boxes = await predictions[0].array();
        // const classes = await predictions[1].array();
        // const scores = await predictions[2].array();
        // console.log(boxes, classes, scores);

        // 다음 프레임을 처리하기 위해 재귀적으로 호출합니다.
        requestAnimationFrame(detectObjects);
      };

      // 객체 인식을 시작합니다.
      detectObjects();
    };

    // 웹캠 스트림에 접근하고 객체 인식을 시작합니다.
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          loadModelAndDetect();
        };
      })
      .catch((error) => {
        console.log("웹캠 접근 오류:", error);
      });
  }, []);

  return (
    <div className="Container">
      <video
        id="video"
        width={400}
        height={400}
        autoPlay
        ref={videoRef}
        style={{ transform: "scaleX(-1)" }}
      />
    </div>
  );
}
