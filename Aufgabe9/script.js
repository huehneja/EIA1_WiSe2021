//Tastatursteuerung für Taskeingabe//
window.addEventListener("load", function () {
    document.querySelector("input").addEventListener("keydown", function (event) { if (event.keyCode === 13) {
        if (document.querySelector("input").value != "") {
            createTask();
            document.querySelector("input").value = "";
        }
        else {
            alert("Error 420: Input must not be empty!");
        }
    } });
});
//Taskcounter//
var counter = 0;
//Erstellt die Task//
function createTask() {
    counter++;
    document.getElementById("amount").innerHTML = "" + counter;
    var checkedTask = false;
    var input = document.querySelector("input").value;
    var tasklist = document.getElementById("tasklist");
    var newTask = document.createElement("li");
    var createCheckIcon = document.createElement("i");
    var createText = document.createElement("p");
    var createDelIcon = document.createElement("i");
    tasklist.appendChild(newTask);
    newTask.appendChild(createCheckIcon);
    createCheckIcon.classList.add("far", "fa-circle");
    createCheckIcon.setAttribute("id", "check");
    newTask.appendChild(createText);
    createText.innerHTML = input;
    newTask.appendChild(createDelIcon);
    createDelIcon.classList.add("far", "fa-trash-alt");
    //Funktionen für die Icons//
    createCheckIcon.addEventListener("click", function () { if (!checkedTask) {
        createCheckIcon.setAttribute("class", "far fa-check-circle");
        checkedTask = true;
    }
    else {
        createCheckIcon.setAttribute("class", "far fa-circle");
        checkedTask = false;
    } });
    createDelIcon.addEventListener("click", function () { tasklist.removeChild(newTask); counter--; document.getElementById("amount").innerHTML = "" + counter; });
}
