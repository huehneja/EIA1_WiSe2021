//Tastatursteuerung für Taskeingabe//
window.addEventListener("load", function () {
    document.getElementById("taskmaster").addEventListener("keydown", function (event) { if (event.keyCode === 13) {
        if (document.getElementById("taskmaster").value != "") {
            createTask();
            document.getElementById("taskmaster").value = "";
        }
        else {
            alert("Error 420: Input must not be empty!");
        }
        updateCounter();
    } });
});
//Taskcounter//
var counter = 0;
var donecount = 0;
var leftcount = 0;
//Erstellt die Task//
function createTask() {
    counter++;
    var checkedTask = false;
    var input = document.getElementById("taskmaster").value;
    var tasklist = document.getElementById("tasklist");
    var newTask = document.createElement("li");
    var color = document.getElementById("color").value;
    var createCheckIcon = document.createElement("i");
    var createText = document.createElement("p");
    var createDelIcon = document.createElement("i");
    var str = "";
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var stampCheck = document.getElementById("timestamp");
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    str += hours + ":" + minutes + " ";
    tasklist.appendChild(newTask);
    newTask.style.background = color;
    newTask.appendChild(createCheckIcon);
    createCheckIcon.classList.add("far", "fa-circle");
    createCheckIcon.setAttribute("id", "check");
    newTask.appendChild(createText);
    if (stampCheck.checked == true) {
        createText.innerHTML = str + " - " + input;
    }
    else {
        createText.innerHTML = input;
    }
    newTask.appendChild(createDelIcon);
    createDelIcon.classList.add("fas", "fa-trash-alt");
    createCheckIcon.addEventListener("click", function () { if (!checkedTask) {
        createCheckIcon.setAttribute("class", "far fa-check-circle");
        checkedTask = true;
        donecount++;
    }
    else {
        createCheckIcon.setAttribute("class", "far fa-circle");
        checkedTask = false;
        donecount--;
    } updateCounter(); });
    createDelIcon.addEventListener("click", function () { tasklist.removeChild(newTask); counter--; if (!checkedTask) {
        leftcount--;
    }
    else {
        donecount--;
    } document.getElementById("amount").innerHTML = "" + counter; updateCounter(); });
}
function updateCounter() {
    leftcount = counter - donecount;
    document.getElementById("done").innerHTML = "" + donecount;
    document.getElementById("left").innerHTML = "" + leftcount;
    document.getElementById("amount").innerHTML = "" + counter;
}
