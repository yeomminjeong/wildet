import torch
from yolov5.models.experimental import attempt_load
# import sys

# sys.path.insert(0,'/Users/minjeongyeom/Projects/detect/yolov5/models')

# Load PyTorch model
model = attempt_load("yolov5s.pt")

dummy_input = torch.randn(1, 3, 416, 416, device='cpu')

# Export the PyTorch model to ONNX
torch.onnx.export(model, dummy_input, "yolov5s.onnx", opset_version=11)
