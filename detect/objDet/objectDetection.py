import cv2
import torch
from flask import Flask, Response, render_template
from yolov5.utils.torch_utils import select_device
from yolov5.models.experimental import attempt_load
from yolov5.utils.dataloaders import letterbox
from yolov5.utils.general import non_max_suppression, scale_boxes, xywh2xyxy
from yolov5.utils.plots import plot_labels
import numpy as np


# 모델 로드 및 초기화
weights = '/Users/minjeongyeom/Projects/project-wildet/detect/yolov5/runs/train/wildlife_yolov5s_results3/weights/best.pt'
device = select_device('cpu')

model = attempt_load(weights, device=device)
stride = int(model.stride.max())  # model stride
img_size = int(416 / stride) * stride  # inference size (pixels)

# 웹 카메라로부터 비디오 스트림 가져오기
cap = cv2.VideoCapture(0)


# Flask 애플리케이션 초기화
app = Flask(__name__)


# 웹 페이지 렌더링
@app.route('/')
def index():
    return render_template('index.html')


# 비디오 스트림 생성
def gen():
    while True:
        success, frame = cap.read()

        if not success:
            break

        # 프레임 전처리
        # img0 = frame.copy()  # BGR
        # img = letterbox(frame, img_size, stride=stride)[0]
        # img = img[:, :, ::-1].transpose(2, 0, 1)  # BGR to RGB
        # img = torch.from_numpy(img).to(device)
        # img = img.float() / 255.0  # 0-1 normalization

        img = letterbox(frame, img_size, stride=stride)[0]
        img = np.ascontiguousarray(img[:, :, ::-1].transpose(2, 0, 1))
        img = torch.from_numpy(img).to(device)
        img = img.float() / 255.0

        # 객체 탐지 수행
        pred = model(img.unsqueeze(0))[0]
        pred = non_max_suppression(pred, 0.4, 0.5)

        # 탐지 결과 출력
        for i, det in enumerate(pred):
            if len(det):
                img0_shape = (frame.shape[0], frame.shape[1], 3)
                img1_shape = (img_size, img_size)
                det[:, :4] = scale_boxes(img0_shape, det[:, :4], img1_shape).round()

                for *xyxy, conf, cls in reversed(det):
                    label = f'{model.names[int(cls)]} {conf:.2f}'
                    print(label)
                    plot_labels(xyxy, frame, label=label, color=(0, 255, 0))

        # 프레임 스트림 출력
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

# 비디오 스트림 업데이트
@app.route('/video')
def video():
    return Response(gen(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(debug=True)

