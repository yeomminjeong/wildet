import tensorflowjs as tfjs
import onnx
from onnx2keras import onnx_to_keras

onnx_model = onnx.load('/Users/minjeongyeom/Projects/detect/yolov5s.onnx')
input_names = [node.name for node in onnx_model.graph.input]
# print(input_names)
input_shape = (1, 3, 416, 416)
k_model = onnx_to_keras(onnx_model, input_names=input_names)

# Save Keras model as HDF5 file
k_model.save('yolov5s.h5')

# Convert Keras model to Tensorflow.js model
tfjs.converters.save_keras_model(k_model, 'tfjs_model')
