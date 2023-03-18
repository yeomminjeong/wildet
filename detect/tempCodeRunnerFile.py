import tensorflowjs as tfjs
import onnx
import onnx2keras

onnx_model = onnx.load('/Users/minjeongyeom/Projects/detect/yolov5s.onnx')
k_model = onnx2keras.convert_model(onnx_model, input_names='.1')

# Save Keras model as HDF5 file
k_model.save('yolov5s.h5')

# Convert Keras model to Tensorflow.js model
tfjs.converters.save_keras_model(k_model, 'tfjs_model')