// script_7_1.js - Handles the image rotation logic

// Global variable to store the rotation angle
let rotationAngle = 0;

// Function to start the meme image rotation
function startMoving() {
    // Disabling the start button and enabling the stop button
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;

    // Set an interval to rotate the image every 100 milliseconds
    window.rotationInterval = setInterval(function() {
        rotationAngle = (rotationAngle + 10) % 360; // Increase the angle and wrap around at 360
        const memeImg = document.getElementById('meme');
        memeImg.style.transform = `translateX(-50%) rotate(${rotationAngle}deg)`;
    }, 100);
}

// Function to stop the meme image rotation
function stopMoving() {
    // Enabling the start button and disabling the stop button
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;

    // Clearing the interval to stop the rotation
    clearInterval(window.rotationInterval);
}
