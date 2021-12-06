//Array für Soundfiles & Beat & Randomplaylist//
var sounds = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/leer.mp3"];
var beat = [sounds[1], sounds[1], sounds[1], sounds[2], sounds[1], sounds[1], sounds[0], sounds[2]];
var random = [sounds[0], sounds[1], sounds[2], sounds[7], sounds[8]];
//Booleans für Funktionen//
var beatPlaying = false;
var beatRecording = false;
//Zentrale Funktion zum Abspielen der Audiofiles & eventuelles Recording//
function playSample(audioFile) {
    var sound = new Audio(audioFile);
    sound.play();
    if (beatRecording == true) {
        beat.push(audioFile);
    }
}
//Funktion für den Playbutton//
function playBeat() {
    beatPlaying = true;
    document.getElementById("play").setAttribute("class", "far fa-stop-circle");
    var index1 = 0;
    var interval = setInterval(playInterval, 250);
    function playInterval() { if (!beatPlaying) {
        clearInterval(interval);
    }
    else if (index1 >= beat.length) {
        index1 = 0;
        playSample([beat[index1]]);
    }
    else {
        playSample([beat[index1]]);
    } index1++; }
    console.log(beat);
}
//Funktion für Stop (wird mehrfach benutzt um bei anderen Befehlen nicht zu überlappen)//
function stopBeat() {
    document.getElementById("play").setAttribute("class", "far fa-play-circle");
    beatPlaying = false;
}
//Funktion um einen zufälligen Beat mit 8 Sounds zu erstellen//
function randomBeat() {
    stopRecording();
    deleteBeat();
    for (var i = 0; i < 8; i++) {
        beat.push(random[Math.floor(Math.random() * 5)]);
    }
}
//Funktion um den Beat zu löschen bzw. einen leeren Beat laufen zu lassen// 
function deleteBeat() {
    stopBeat();
    beat = [];
}
//Funktion um einen Beat zu recorden//
function recordBeat() {
    deleteBeat();
    beatRecording = true;
    //Blinkende Aufnahme//
    var interval = setInterval(playInterval, 500);
    var interval2 = setInterval(playInterval2, 1000);
    function playInterval() { if (beatRecording == false) {
        clearInterval(interval);
    }
    else {
        document.getElementById("record").setAttribute("style", "color: #d42121;");
    } }
    function playInterval2() { if (beatRecording == false) {
        clearInterval(interval2);
    }
    else {
        document.getElementById("record").setAttribute("style", "color: #000000;");
    } }
}
//Funktion um das Recorden zu stoppen//
function stopRecording() {
    beatRecording = false;
    document.getElementById("record").setAttribute("style", "color: #f53d3d;");
}
//EventListener für die zentrale Funktion & keydown Events für Tastatursteuerung//
window.addEventListener("load", function () {
    document.getElementById("hihat").addEventListener("click", function () { playSample(sounds[0]); });
    document.getElementById("kick").addEventListener("click", function () { playSample(sounds[1]); });
    document.getElementById("snare").addEventListener("click", function () { playSample(sounds[2]); });
    document.getElementById("F").addEventListener("click", function () { playSample(sounds[3]); });
    document.getElementById("G").addEventListener("click", function () { playSample(sounds[4]); });
    document.getElementById("A").addEventListener("click", function () { playSample(sounds[5]); });
    document.getElementById("C").addEventListener("click", function () { playSample(sounds[6]); });
    document.getElementById("laugh-1").addEventListener("click", function () { playSample(sounds[7]); });
    document.getElementById("laugh-2").addEventListener("click", function () { playSample(sounds[8]); });
    document.getElementById("play").addEventListener("click", function () { stopRecording(); if (!beatPlaying && beat[1] != undefined) {
        playBeat();
    }
    else {
        stopBeat();
    } }); // Verhindert das bei leerem Beat ein Error ausgegeben wird//
    document.getElementById("random").addEventListener("click", function () { randomBeat(); });
    document.getElementById("delete").addEventListener("click", function () { deleteBeat(); });
    document.getElementById("record").addEventListener("click", function () { if (!beatRecording) {
        recordBeat();
    }
    else {
        stopRecording();
    } });
    //Tastatur Steuerung//
    document.addEventListener("keydown", function (event) { if (event.key == "7") {
        playSample(sounds[0]);
    } });
    document.addEventListener("keydown", function (event) { if (event.key == "8") {
        playSample(sounds[1]);
    } });
    document.addEventListener("keydown", function (event) { if (event.key == "9") {
        playSample(sounds[2]);
    } });
    document.addEventListener("keydown", function (event) { if (event.key == "4") {
        playSample(sounds[3]);
    } });
    document.addEventListener("keydown", function (event) { if (event.key == "5") {
        playSample(sounds[4]);
    } });
    document.addEventListener("keydown", function (event) { if (event.key == "6") {
        playSample(sounds[5]);
    } });
    document.addEventListener("keydown", function (event) { if (event.key == "1") {
        playSample(sounds[6]);
    } });
    document.addEventListener("keydown", function (event) { if (event.key == "2") {
        playSample(sounds[7]);
    } });
    document.addEventListener("keydown", function (event) { if (event.key == "3") {
        playSample(sounds[8]);
    } });
    document.addEventListener("keydown", function (event) { if (event.key == "0") {
        if (!beatPlaying && beat[1] != undefined) {
            playBeat();
        }
        else {
            stopBeat();
        }
    } }); //Siehe Zeile 70//
});
