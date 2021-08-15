// conenction
let socket = io();

//Socket.io
socket.on("Hola",(arg) => {
  console.log(arg);
  socket.emit('Hola2', "Hola desde web");
});

/**Select Video**/

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById("snap");
const errorMsgElement = document.querySelector('span#errorMsg');

const constraints = {
  audio: true,
  video: {
    width: 400, height: 300
  }
};

// Access webcam
async function init(){
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  }
  catch(e){
    errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
  }
} //cierre

// Success
function handleSuccess(stream){
  window.stream = stream;
  video.srcObject = stream;

  		var outputStream = canvas.toDataURL('image/jpeg', .2);
			
		socket.emit('stream',outputStream);
}

// Load init
init();

// Draw image
// var context = canvas.getContext('2d');
	// snap.addEventListener("click", function(){
		
			// // context.drawImage(video, 0, 0, 640, 480);
			

	// });




