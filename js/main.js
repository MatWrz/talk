import getUserAudio from './audio';

function playAudio(stream) {
  const audio = document.querySelector('audio');
  audio.srcObject = stream;
}

getUserAudio(navigator.mediaDevices).then(playAudio);
