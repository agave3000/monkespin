const monke = document.getElementById("change-monke");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");

var song = new Audio("./assets/monke.mp3");

monke.onload = start_btn.addEventListener("click", function() {
    monke.src = "./assets/spin.gif";
    song.play();
    song.loop = true
})

monke.onload = stop_btn.addEventListener("click", function() {
    monke.src = "./assets/static.png";
    song.pause();
    song.loop = false;
})
