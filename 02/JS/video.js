// dpr 영상관련
var wrap = document.getElementsByClassName("wrap")[0];

// 비디오
var video = document.getElementById("video");

// 재생 버튼
var playToggleBtn = document.getElementById("play-toggle-btn");

// 음소거 버튼
var muteToggleBtn = document.getElementById('mute-toggle-btn');

// 전체화면 버튼
var fullscreenBtn = document.getElementById("fullscreen-btn");

// 현재시간
var displayTime = document.getElementById("display-time");

// 동영상 길이
var durationSpan = document.getElementById("duration");

function playStop() {

    if (!video.paused) {
        playToggleBtn.innerText = "재생";
        video.pause();
    } else {
        playToggleBtn.innerText = "정지";
        video.play();
    }
}

function muteToggle() {

    if (!video.muted) {
        muteToggleBtn.innerText = "켜기";
        video.muted = true;
    }
    else {
       muteToggleBtn.innerText = "끄기";
       video.muted = false;
    }
}

function fullScreen() {

    if (!document.fullscreenElement) {
        fullscreenBtn.innerText = "돌아가기";
        wrap.requestFullscreen().catch(err => {
            alert('Error attempting to enable full-screen mode: ${err.message} (${err.name})');
        });
    } else {
        fullscreenBtn.innerText = "전체화면";
        document.exitFullscreen();
    }
}

video.onloadeddata = function() {
    durationSpan.innerHTML = "동영상 길이<br>" + video.duration;
}

video.ontimeupdate = function() {
    displayTime.innerHTML = `<b>현재 시간</b><br>${video.currentTime}`;
}
