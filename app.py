from flask import Flask, render_template, request, jsonify
import numpy as np
from tensorflow.keras.models import load_model  #type:ignore
from PIL import Image
import io
import base64

app = Flask(__name__)

# Load the trained model
model = load_model('models/mnist_model.h5')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    image_data = data['image'].split(',')[1]  # Remove the base64 prefix
    image = Image.open(io.BytesIO(base64.b64decode(image_data))).convert('L')  # Convert to grayscale
    image = image.resize((28, 28))  # Resize to 28x28
    image = np.array(image) / 255.0  # Normalize
    image = image.reshape(1, 28, 28, 1)  # Reshape for the model

    # Debug: Log the preprocessed image shape and values
    print('Preprocessed Image Shape:', image.shape)
    print('Preprocessed Image Values:', image)

    # Make prediction
    prediction = model.predict(image)
    predicted_digit = np.argmax(prediction)
    confidence = np.max(prediction)

    print(f'Predicted Digit: {predicted_digit}, Confidence: {confidence:.4f}')

    return jsonify({'digit': int(predicted_digit), 'confidence': float(confidence)})

if __name__ == '__main__':
    app.run(debug=True)