//Array für Soundfiles & Beat & Randomplaylist//
var sounds: string [] = [ "assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/leer.mp3"];
var beat: string [] = [sounds[1], sounds[1], sounds [1], sounds[2], sounds[1], sounds[1], sounds[0], sounds[2]];
var random: string [] = [sounds[0], sounds[1], sounds[2], sounds[7], sounds[8]];
var song: string [] = [sounds[5], sounds[4], sounds [3], sounds[4], sounds[5],  sounds[5], sounds[5], sounds[2], sounds[4], sounds[4], sounds[4], sounds[2], sounds[5], sounds[6], sounds[6], sounds[2], sounds[5], sounds[4], sounds [3], sounds[4], sounds[5], sounds[5], sounds[5], sounds[2], sounds[4], sounds[4], sounds[5], sounds[4], sounds [3], sounds[7] , sounds[8], sounds[2], sounds[2], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0], sounds[2], sounds[0], sounds[1], sounds [0]];  //Who will ever gonna find this??//
//Booleans für Funktionen//
var beatPlaying: boolean = false;
var beatRecording: boolean = false;

//Zentrale Funktion zum Abspielen der Audiofiles & eventuelles Recording//
function playSample (audioFile): void {
    var sound: HTMLAudioElement = new Audio(audioFile);
    sound.play();
    if (beatRecording == true) {
        beat.push(audioFile);
    }
}
//Funktion für den Playbutton//
function playBeat (): void {
    beatPlaying = true;
    document.getElementById("play").setAttribute("class", "far fa-stop-circle");
    var index1: number = 0;
    var interval: any = setInterval(playInterval, 250);
    function playInterval(): void {if (!beatPlaying) { clearInterval(interval); } else if (index1 == 64) {beat = song ; index1 = 0 ; } else  if (index1 >= beat.length) { index1 = 0 ; playSample([beat[index1]]); } else {playSample([beat[index1]]); } index1++; }
    console.log(beat);
    }

//Funktion für Stop (wird mehrfach benutzt um bei anderen Befehlen nicht zu überlappen)//
function stopBeat(): void {
    document.getElementById("play").setAttribute("class", "far fa-play-circle"); beatPlaying = false;
}

//Funktion um einen zufälligen Beat mit 8 Sounds zu erstellen//
function randomBeat(): void {
    stopRecording();
    deleteBeat();
    for (var i: number = 0; i < 8; i++) {
    beat.push(random[Math.floor(Math.random() * 5)]);
    }
}

//Funktion um den Beat zu löschen bzw. einen leeren Beat laufen zu lassen// 
function deleteBeat(): void {
    stopBeat();
    beat = [];
}
//Funktion um einen Beat zu recorden//
function recordBeat(): void {
    deleteBeat();
    beatRecording = true;
    //Blinkende Aufnahme//
    var interval: any = setInterval(playInterval, 500);
    var interval2: any = setInterval (playInterval2, 1000);
    function playInterval(): void {if (beatRecording == false) {clearInterval(interval); } else {document.getElementById("record").setAttribute("style", "color: #d42121;"); }}
    function playInterval2(): void {if (beatRecording == false) {clearInterval(interval2); } else {document.getElementById("record").setAttribute("style", "color: #000000;"); }}

}
//Funktion um das Recorden zu stoppen//
function stopRecording(): void {
    beatRecording = false;
    document.getElementById("record").setAttribute("style", "color: #f53d3d;");
}
//EventListener für die zentrale Funktion & keydown Events für Tastatursteuerung//
window.addEventListener("load", function(): void {
    document.getElementById("hihat").addEventListener("click", function(): void {playSample(sounds[0]); });
    document.getElementById("kick").addEventListener("click", function(): void {playSample(sounds[1]); });
    document.getElementById("snare").addEventListener("click", function(): void {playSample(sounds[2]); });
    document.getElementById("F").addEventListener("click", function(): void {playSample(sounds[3]); });
    document.getElementById("G").addEventListener("click", function(): void {playSample(sounds[4]); });
    document.getElementById("A").addEventListener("click", function(): void {playSample(sounds[5]); });
    document.getElementById("C").addEventListener("click", function(): void {playSample(sounds[6]); });
    document.getElementById("laugh-1").addEventListener("click", function(): void {playSample(sounds[7]); });
    document.getElementById("laugh-2").addEventListener("click", function(): void {playSample(sounds[8]); });
    document.getElementById("play").addEventListener("click", function(): void {stopRecording(); if (!beatPlaying && beat[1] != undefined) {playBeat(); } else {stopBeat(); }}); // Verhindert das bei leerem Beat ein Error ausgegeben wird//
    document.getElementById("random").addEventListener("click", function(): void {randomBeat(); });
    document.getElementById("delete").addEventListener("click", function(): void {deleteBeat(); });
    document.getElementById("record").addEventListener("click", function(): void {if (!beatRecording) {recordBeat(); } else { stopRecording(); }});
    //Tastatur Steuerung//
    document.addEventListener("keydown", (event) => { if (event.key == "7") { playSample(sounds[0]); } });
    document.addEventListener("keydown", (event) => {if (event.key == "8") {playSample (sounds[1]); }}); 
    document.addEventListener("keydown", (event) => {if (event.key == "9") {playSample (sounds[2]); }});
    document.addEventListener("keydown", (event) => {if (event.key == "4") {playSample (sounds[3]); }});
    document.addEventListener("keydown", (event) => {if (event.key == "5") {playSample (sounds[4]); }});
    document.addEventListener("keydown", (event) => {if (event.key == "6") {playSample (sounds[5]); }});
    document.addEventListener("keydown", (event) => {if (event.key == "1") {playSample (sounds[6]); }});
    document.addEventListener("keydown", (event) => {if (event.key == "2") {playSample (sounds[7]); }});
    document.addEventListener("keydown", (event) => {if (event.key == "3") {playSample (sounds[8]); }});
    document.addEventListener("keydown", (event) => {if (event.key == "0") {stopRecording(); if (!beatPlaying && beat[1] != undefined) {playBeat(); } else {stopBeat(); }}}); //Siehe Zeile 70//
});