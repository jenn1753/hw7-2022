var video;
var volume;

//page load - initalize video element and turn off autoplay and looping
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
	video.load();

});

//play button - plays video and updates volume information 
document.querySelector("#play").addEventListener("click", function(){
	console.log("Play video.");
	video.play();
	volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%";
	console.log("Volume is " + volume + "%");
});

//Pause button - pause the video
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Video paused.")
	video.pause();
});

//Slow down - slow current video speed by 10% each time button is clicked 
//Log new speed to console
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
});

//Speed up - increase current video each time button is clicked
//Log new speed to console
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is " + video.playbackRate);
});

//Skip ahead - advance current video by 10 sec
//Go back to start of video if length is exceeded
//Log current location of video
document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime = video.currentTime + 10;
	if (video.currentTime < video.duration){
		video.currentTime = video.currentTime;
	}
	else{
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

//Mute - mute and unmute with update text in button
document.querySelector("#mute").addEventListener("click", function(){
	console.log("Video mute is " + video.muted);
	if (video.muted == true){
		console.log("On mute - now unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else if (video.muted == false){
		console.log("Video not muted - now muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else{
		console.log("Video muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

//Volume slider - changed volume based on slider and update volume information
document.querySelector("#slider").addEventListener("input", function(){	
	volume = document.getElementById("slider").value;
	video.volume = volume * 0.01;
	document.getElementById("volume").innerHTML = volume + "%";
	console.log("Volume is " + volume + "%");
});

//Styled - oldSchool class on video element
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old school class applied.");
	const list = video.classList;
	list.add("oldSchool");
});

//Original - removed oldSchool class from video
document.querySelector("#orig").addEventListener("click", function(){
	console.log("Removed old school class.");
	const list = video.classList;
	list.remove("oldSchool");
});