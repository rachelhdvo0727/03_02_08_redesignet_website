window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    //burgermenu
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    //medlemskab animation
    var medlemboks = document.querySelector(".boks");
    // Video
    var video = document.querySelector("#video");

    // Buttons
    var playButton = document.querySelector("#play-pause");
    var muteButton = document.querySelector("#mute");
    var fullScreenButton = document.querySelector("#full-screen");

    // Sliders
    var seekBar = document.querySelector("#seek-bar");
    var volumeBar = document.querySelector("#volume-bar");

    //Event listerner for medlemskabs bokser

    // Event listener for the play/pause button
    playButton.addEventListener("click", playVideo);

    // Event listener for the mute button
    muteButton.addEventListener("click", muteVideo);

    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", fullScreen);

    // Event listener for the seek bar
    seekBar.addEventListener("change", barVises);

    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", videoUpdate);

    // Pause the video when the slider handle is being dragged
    seekBar.addEventListener("mousedown", sliderPause);

    // Play the video when the slider handle is dropped
    seekBar.addEventListener("mouseup", sliderPlay);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector(".social_media").classList.add("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");


    if (erSkjult == true) {
        document.querySelector("#menuknap").classList.toggle("change");
    } else {
        document.querySelector("#menuknap").classList.toggle("change");
    }
}



function playVideo() {
    console.log("playVideo");
    if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        document.querySelector("#play-pause").innerHTML = "Pause";

    } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        document.querySelector("#play-pause").innerHTML = "Play";
    }
}



function muteVideo() {
    if (video.muted == false) {
        // Mute the video
        video.muted = true;

        // Update the button text
        document.querySelector("#mute").innerHTML = "Unmute";
    } else {
        // Unmute the video
        video.muted = false;

        // Update the button text
        document.querySelector("#mute").innerHTML = "Mute";
    }
}



function fullScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Chrome and Safari
    }
}


function barVises() {
    // Calculate the new time
    var time = video.duration * (seekBar.value / 100);

    // Update the video time
    video.currentTime = time;
}



function videoUpdate() {
    // Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;

    // Update the slider value
    document.querySelector("#seek-bar").value = value;
}


function sliderPause() {
    video.pause();
}


function sliderPlay() {
    video.play();
}
