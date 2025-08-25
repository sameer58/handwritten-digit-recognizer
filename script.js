const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearBtn = document.getElementById('clear-btn');
const predictBtn = document.getElementById('predict-btn');
const loading = document.getElementById('loading');
const result = document.getElementById('result');

// Set canvas size
canvas.width = 280;
canvas.height = 280;

// Drawing on canvas
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Set the starting point
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    draw(e);
});

function draw(e) {
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#2c3e50'; // Dark blue color for drawing
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); // Start from the last point
    ctx.lineTo(e.offsetX, e.offsetY); // Draw to the current point
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Update the last point
}

// Clear canvas
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    result.style.opacity = 0; // Hide result
});

// Predict digit
predictBtn.addEventListener('click', () => {
    // Get the canvas image as a base64 string
    const image = canvas.toDataURL('image/png');

    // Show loading spinner
    loading.style.display = 'block';
    result.style.opacity = 0;

    // Debug: Log the image data URL to the console
    console.log('Canvas Image Data URL:', image);

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image }),
    })
    .then(response => response.json())
    .then(data => {
        // Hide loading spinner
        loading.style.display = 'none';

        // Show result with animation
        result.innerText = `Predicted Digit: ${data.digit}`;
        result.style.opacity = 1;
    })
    .catch(error => {
        console.error('Error:', error);
        loading.style.display = 'none';
        result.innerText = 'Prediction failed. Try again.';
        result.style.opacity = 1;
    });
});