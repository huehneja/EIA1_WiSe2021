//Tastatursteuerung für Taskeingabe//
window.addEventListener("load", function(): void {
    (<HTMLInputElement>document.getElementById("taskmaster")).addEventListener("keydown", (event) => { if (event.keyCode === 13) { if ((<HTMLInputElement>document.getElementById("taskmaster")).value != "") { createTask(); (<HTMLInputElement>document.getElementById("taskmaster")).value = ""; } else {alert("Error 420: Input must not be empty!"); } updateCounter(); }});
    
});

//Taskcounter//
var counter: number = 0;
var donecount: number = 0;
var leftcount: number = 0;

//Update Counter//
function updateCounter(): void {
    leftcount = counter - donecount;
    document.getElementById("done").innerHTML = "" + donecount;
    document.getElementById("left").innerHTML = "" + leftcount;
    document.getElementById("amount").innerHTML = "" + counter;
}

//Erstellt die Task//
function createTask(): void {
    counter++;

    //Variablen für DOM Manipulation und Styles + Logik für Funktionen//
    let checkedTask: boolean = false;
    let input: string = (<HTMLInputElement>document.getElementById("taskmaster")).value;
    var tasklist: any = document.getElementById("tasklist");
    var newTask: any = document.createElement("li");
    var color: any = (<HTMLInputElement>document.getElementById("color")).value;
    var createCheckIcon: any = document.createElement("i");
    var createText: any = document.createElement("p");
    var createDelIcon: any = document.createElement("i");
    var str: string = "";
    var currentTime: any = new Date();
    var hours: any = currentTime.getHours();
    var minutes: any = currentTime.getMinutes();
    var stampCheck: any = document.getElementById("timestamp");
    var rbCheck: any = document.getElementById("regenbogen");
    
    tasklist.appendChild(newTask);

    //Regenbogen//
    if (rbCheck.checked == true) {
        newTask.style.backgroundImage = "url('../Aufgabe4/Assets/bg.gif')";
    } else {
        newTask.style.background = color;
    }

    //Checkicon//
    newTask.appendChild(createCheckIcon);
    createCheckIcon.classList.add("far", "fa-circle");
    createCheckIcon.setAttribute("id", "check");

    //Timestamp + Input//
    newTask.appendChild(createText);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    str += hours + ":" + minutes + " ";
    if (stampCheck.checked == true) { 
        createText.innerHTML = str + " - " + input;
      } else {
        createText.innerHTML = input;
      }

    //Deleteicon//
    newTask.appendChild(createDelIcon);
    createDelIcon.classList.add("fas", "fa-trash-alt");

    //Funktion Counter + Icons//
    createCheckIcon.addEventListener("click", function(): void {if (!checkedTask) {createCheckIcon.setAttribute("class", "far fa-check-circle"); checkedTask = true; donecount++; } else {createCheckIcon.setAttribute("class", "far fa-circle"); checkedTask = false; donecount--; } updateCounter(); });
    createDelIcon.addEventListener("click", function(): void { tasklist.removeChild (newTask); counter--; if (!checkedTask) {leftcount--; } else {donecount--; } document.getElementById("amount").innerHTML = "" + counter; updateCounter(); });
}