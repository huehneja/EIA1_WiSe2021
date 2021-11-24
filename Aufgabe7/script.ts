//Zentrale Funktion zum Abspielen der Audiofiles//
function playSample (audioFile) {
    var sound:HTMLAudioElement = new Audio(audioFile);
    sound.play();
}
//Array & Funktion für den Beat//
var Beat : string [] = [ "assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3"]
function playBeat (){
setInterval(function(){ playSample(Beat[0])}, 4000);
setInterval(function(){ playSample(Beat[1])}, 500);
setInterval(function(){ playSample(Beat[2])}, 1000);
}
//EventListener für die zentrale Funktion//
window.addEventListener("load", function() {
document.getElementById("F").addEventListener("click", function () {playSample("assets/F.mp3")})
document.getElementById("G").addEventListener("click", function () {playSample("assets/G.mp3")})
document.getElementById("A").addEventListener("click", function () {playSample("assets/A.mp3")})
document.getElementById("C").addEventListener("click", function () {playSample("assets/C.mp3")})
document.getElementById("hihat").addEventListener("click", function () {playSample("assets/hihat.mp3")})
document.getElementById("kick").addEventListener("click", function () {playSample("assets/kick.mp3")})
document.getElementById("laugh-1").addEventListener("click", function () {playSample("assets/laugh-1.mp3")})
document.getElementById("laugh-2").addEventListener("click", function () {playSample("assets/laugh-2.mp3")})
document.getElementById("snare").addEventListener("click", function () {playSample("assets/snare.mp3")})
document.getElementById("play").addEventListener("click", function () {playBeat()})
document.querySelector("body").addEventListener("keypress", function(pressedkey) {
})
})
