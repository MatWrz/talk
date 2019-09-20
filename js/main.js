export default function sum(x, y) {
  return x + y;
}

// Put variables in global scope to make them available to the browser console.
const audio = document.querySelector('audio');

window.constraints = {
  audio: true
};

function handleSuccess(stream) {
  window.stream = stream; // make variable available to browser console
  audio.srcObject = stream;
}

navigator.mediaDevices.getUserMedia(window.constraints).then(handleSuccess);
