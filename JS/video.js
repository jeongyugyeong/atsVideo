var vidClip = document.getElementById("myVideo");
var btn = document.getElementById("btnBtn");

// 영상 현재 시간 출력해주는 버튼
var time = document.getElementById("timeTime");
var mark = document.getElementById("bookMark");

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