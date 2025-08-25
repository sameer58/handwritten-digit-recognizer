🖊️ Handwritten Digit Recognizer:

A deep learning project that recognizes handwritten digits (0–9) from the MNIST dataset using a Neural Network built with TensorFlow/Keras.


📌 Features:

Trained on the MNIST dataset (70,000 grayscale images of digits).

Achieves high accuracy on test data.

Built using TensorFlow/Keras.

Provides an interactive prediction demo (via Flask/Streamlit/CLI depending on your setup).

Simple UI to draw digits and get predictions (optional if you added it).


🚀 Tech Stack:

Python 3.10

TensorFlow / Keras

NumPy & Pandas

Matplotlib / Seaborn (for visualization)

(Optional) Flask / Streamlit for web app


📂 Project Structure

handwritten-digit-recognizer/

│── app/                  # Flask/Streamlit app files

│── models/               # Saved trained model (.h5 or .keras)

⚠️ The trained model file (mnist_model.h5) is large, so it’s not included in this repo. You can download it from [https://drive.google.com/file/d/1PqHXYMxR99ZppFoMaRsTomYaFuwzzWqZ/view?usp=sharing].


│── static/               # (Optional) CSS, JS, images for web app

│── templates/            # (Optional) HTML templates for Flask

│── app.py                # Main app script

│── train.py              # Model training script

│── requirements.txt      # Project dependencies

│── README.md             # Project documentation


📌 Future Improvements:

Deploy on Heroku/Render/Streamlit Cloud.

Improve UI for digit drawing.

Try CNN (Convolutional Neural Network) for even better accuracy.


🤝 Contributing:

Pull requests are welcome! For major changes, please open an issue first to discuss.


📜 License:

This project is licensed under the MIT License.


