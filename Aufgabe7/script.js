//Zentrale Funktion zum Abspielen der Audiofiles//
function playSample(audioFile) {
    var sound = new Audio(audioFile);
    sound.play();
}
//Array & Funktion für den Beat//
function playBeat() {
    setInterval(function () { playSample(Sounds[0]); }, 8000);
    setInterval(function () { playSample(Sounds[1]); }, 500);
    setInterval(function () { playSample(Sounds[1]); }, 750);
    setInterval(function () { playSample(Sounds[2]); }, 2000);
}
var Sounds = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
//EventListener für die zentrale Funktion & keydown Events//
window.addEventListener("load", function () {
    document.getElementById("hihat").addEventListener("click", function () { playSample(Sounds[0]); });
    document.getElementById("kick").addEventListener("click", function () { playSample(Sounds[1]); });
    document.getElementById("snare").addEventListener("click", function () { playSample(Sounds[2]); });
    document.getElementById("F").addEventListener("click", function () { playSample(Sounds[3]); });
    document.getElementById("G").addEventListener("click", function () { playSample(Sounds[4]); });
    document.getElementById("A").addEventListener("click", function () { playSample(Sounds[5]); });
    document.getElementById("C").addEventListener("click", function () { playSample(Sounds[6]); });
    document.getElementById("laugh-1").addEventListener("click", function () { playSample(Sounds[7]); });
    document.getElementById("laugh-2").addEventListener("click", function () { playSample(Sounds[8]); });
    document.getElementById("play").addEventListener("click", function () { playBeat(); });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 103) {
        playSample(Sounds[0]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 104) {
        playSample(Sounds[1]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 105) {
        playSample(Sounds[2]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 100) {
        playSample(Sounds[3]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 101) {
        playSample(Sounds[4]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 102) {
        playSample(Sounds[5]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 97) {
        playSample(Sounds[6]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 98) {
        playSample(Sounds[7]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 99) {
        playSample(Sounds[8]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 96) {
        playBeat();
    } });
});
