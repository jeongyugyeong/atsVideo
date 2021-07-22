var vidClip = document.getElementById("myVideo");
var btn = document.getElementById("btnBtn");

// 영상 현재 시간 출력해주는 버튼
var time = document.getElementById("timeTime");
var mark = document.getElementById("bookMark");

// dpr 영상관련
// 비디오
var video = document.getElementById("dpr");

// 재생 버튼
var button = document.getElementById("dprBtn");

// 음소거 버튼
var mute = document.getElementById('dprMute');


function playToggle() {

    if (!vidClip.paused) {
        btn.innerText = "재생";
        vidClip.pause();
    } else {
        btn.innerText = "정지";
        vidClip.play();
    }
}

function current() {
    time.innerText = vidClip.currentTime;
}

function submit() {
    vidClip.currentTime = mark.value;
    vidClip.pause();
}

function playStop() {

    if (!dpr.paused) {
        button.innerText = "재생";
        dpr.pause();
    } else {
        button.innerText = "정지";
        dpr.play();
    }
}

function muteToggle() {
    

    if (!video.muted) {
        mute.innerText = "꺼라";
        video.muted = true;
    }
    else {
       
    }
}