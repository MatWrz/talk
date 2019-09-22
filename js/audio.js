// returns a Promise to a MediaStream of the user's microphone audio track
export default function getUserAudio(mediaDevices) {
  return mediaDevices.getUserMedia({
    audio: true
  });
}
