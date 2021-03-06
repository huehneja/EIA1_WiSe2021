//Zentrale Funktion zum Abspielen der Audiofiles//
function playSample(audioFile) {
    var sound = new Audio(audioFile);
    sound.play();
}
//Funktion für den Beat//
function playBeat() {
    var Beat = [Sounds[1], Sounds[1], Sounds[1], Sounds[2], Sounds[1], Sounds[1], Sounds[0], Sounds[2]];
    var Song = [Sounds[5], Sounds[4], Sounds[3], Sounds[4], Sounds[5], Sounds[5], Sounds[5], Sounds[9], Sounds[4], Sounds[4], Sounds[4], Sounds[9], Sounds[5], Sounds[6], Sounds[6], Sounds[9], Sounds[5], Sounds[4], Sounds[3], Sounds[4], Sounds[5], Sounds[5], Sounds[5], Sounds[9], Sounds[4], Sounds[4], Sounds[5], Sounds[4], Sounds[3], Sounds[7], Sounds[8]]; //Vielen Dank für die Hilfe bei den ,,//
    var index1 = 0;
    var index2 = 0;
    setInterval(function () { playSample([Beat[index1]]), index1++; if (index1 == Beat.length) {
        index1 = 0;
    } }, 200);
    setTimeout(function () { setInterval(function () { if (index2 >= Song.length) {
        stop;
    }
    else {
        playSample([Song[index2]]);
    } ; index2++; }, 400); }, 12800); //Workaround damit Song nur einmal nach dem Timeout abgespielt wird und es durch den Interval nicht zu einem Error kommt//
}
//Array für Soundfiles//
var Sounds = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/leer.mp3"];
//EventListener für die zentrale Funktion & keydown Events für Tastatursteuerung//
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
    //Numpad Steuerung//
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
    //Standard Ziffer Steuerung//
    document.addEventListener("keydown", function (event) { if (event.keyCode == 55) {
        playSample(Sounds[0]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 56) {
        playSample(Sounds[1]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 57) {
        playSample(Sounds[2]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 52) {
        playSample(Sounds[3]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 53) {
        playSample(Sounds[4]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 54) {
        playSample(Sounds[5]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 49) {
        playSample(Sounds[6]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 50) {
        playSample(Sounds[7]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 51) {
        playSample(Sounds[8]);
    } });
    document.addEventListener("keydown", function (event) { if (event.keyCode == 48) {
        playBeat();
    } });
});
