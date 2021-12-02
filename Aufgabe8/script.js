//Array für Soundfiles & Beat & Randomplaylist//
var Sounds = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/leer.mp3"];
var Beat = [Sounds[1], Sounds[1], Sounds[1], Sounds[2], Sounds[1], Sounds[1], Sounds[0], Sounds[2]];
var Random = [Sounds[0], Sounds[1], Sounds[2], Sounds[7], Sounds[8]];
//Booleans für Funktionen//
var beatPlaying = false;
var beatRecording = false;
//Zentrale Funktion zum Abspielen der Audiofiles & eventuelles Recording//
function playSample(audioFile) {
    var sound = new Audio(audioFile);
    sound.play();
    if (beatRecording == true) {
        Beat.push(audioFile);
    }
}
//Funktion für den Playbutton//
function playBeat() {
    beatPlaying = true;
    document.getElementById("play").setAttribute("class", "far fa-stop-circle");
    var index1 = 0;
    var Interval = setInterval(playInterval, 250);
    function playInterval() { if (!beatPlaying) {
        clearInterval(Interval);
    }
    else if (index1 >= Beat.length) {
        index1 = 0;
        playSample([Beat[index1]]);
    }
    else {
        playSample([Beat[index1]]);
    } ; index1++; }
    console.log(Beat);
}
//Funktion für Stop (wird mehrfach benutzt um bei anderen Befehlen nicht zu überlappen)//
function stopBeat() {
    document.getElementById("play").setAttribute("class", "far fa-play-circle");
    beatPlaying = false;
}
//Funktion um einen zufälligen Beat mit 8 Sounds zu erstellen//
function randomBeat() {
    stopBeat();
    stopRecording();
    Beat = [Random[Math.floor(Math.random() * 5)], Random[Math.floor(Math.random() * 5)], Random[Math.floor(Math.random() * 5)], Random[Math.floor(Math.random() * 5)], Random[Math.floor(Math.random() * 5)], Random[Math.floor(Math.random() * 5)], Random[Math.floor(Math.random() * 5)], Random[Math.floor(Math.random() * 5)]];
}
//Funktion um den Beat zu löschen bzw. einen leeren Beat laufen zu lassen// 
function deleteBeat() {
    stopBeat();
    Beat = [];
}
//Funktion um einen Beat zu recorden//
function recordBeat() {
    deleteBeat();
    beatRecording = true;
    //Blinkende Aufnahme//
    var Interval = setInterval(playInterval, 500);
    var Interval2 = setInterval(playInterval2, 1000);
    function playInterval() { if (beatRecording == false) {
        clearInterval(Interval);
    }
    else {
        document.getElementById("record").setAttribute("style", "color: #d42121;");
    } ; }
    function playInterval2() { if (beatRecording == false) {
        clearInterval(Interval2);
    }
    else {
        document.getElementById("record").setAttribute("style", "color: #000000;");
    } }
}
//Funktion um das Recorden zu stoppen//
function stopRecording() {
    beatRecording = false;
    document.getElementById("record").setAttribute("style", "color: #d42121;");
}
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
    document.getElementById("play").addEventListener("click", function () { stopRecording(); if (!beatPlaying && Beat[1] != undefined) {
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
        if (!beatPlaying && Beat[1] != undefined) {
            playBeat();
        }
        else {
            stopBeat();
        }
    } }); //Siehe Zeile 70//
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
        if (!beatPlaying && Beat[1] != undefined) {
            playBeat();
        }
        else {
            stopBeat();
        }
    } }); //Siehe Zeile 70//
});
