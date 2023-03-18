import time

from flask import Flask, request, send_file, send_from_directory
import subprocess
from pathlib import Path
from flask_cors import CORS
import re
from pathlib import Path
import os
# import firebase_admin
# from firebase_admin import credentials, storage
# import datetime


app = Flask(__name__)
CORS(app, supports_credentials=True)


# cred = credentials.Certificate("/Users/minjeongyeom/Downloads/pepe-a24db-firebase-adminsdk-9q4ia-5151ab27d5.json")
# firebase_admin.initialize_app(cred)

# bucket = storage.bucket('pepe-a24db')


@app.route('/detect', methods=['POST'])
def detect():
    # React에서 보낸 파일 데이터를 받아옴
    file = request.files['file']

    # 파일을 임시 폴더에 저장
    file_path = '/Users/minjeongyeom/Projects/project-wildet/detect/video/video.mp4'
    file.save(file_path)

    # YOLOv5 명령어를 실행
    command = f'python /Users/minjeongyeom/Projects/project-wildet/detect/yolov5/detect.py --weights /Users/minjeongyeom/Projects/detect/yolov5/runs/train/wildlife_yolov5s_results3/weights/best.pt --img 416 --conf 0.7 --source {file_path}'
    process = subprocess.Popen(command.split(), cwd='/Users/minjeongyeom/Projects/project-wildet/detect/yolov5' ,stdout=subprocess.PIPE)
    # os.system(command)

    # 명령어 실행 결과를 받아옴
    output, error = process.communicate()

    exp_dir = str(sorted(Path('/Users/minjeongyeom/Projects/project-wildet/detect/yolov5/runs/detect/').glob('exp*'))[-1])
    video_path = str(Path(exp_dir, 'video.mp4'))
    print(video_path)
    return send_file(video_path, as_attachment=False, mimetype='video/mp4')



if __name__ == "__main__":
    app.run(host='localhost', port='5000', debug=True)



