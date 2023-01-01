const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    //미디어스트림데이터를 가질 변수를 설정하고 기다리고 있음
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    //해당 미디어 스트림을 소스개체로 비디오 개체에 전달함
    videoElement.srcObject = mediaStream;
    // 해당 동영상이 메타데이터를 로드하면, 동영상을 재생하는 함수를 호출함
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Catch Error Here
    console.log("Whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  //Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
