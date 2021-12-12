//Tastatursteuerung für Taskeingabe//
window.addEventListener("load", function(): void {
    document.querySelector("input").addEventListener("keydown", (event) => { if (event.keyCode === 13) { createTask(); } });

});
//Taskcounter//
var counter: number = 0;
//Erstellt die Task//
function createTask(): void {
    counter++;
    document.getElementById("amount").innerHTML = "" + counter;
    let checkedTask: boolean = false;
    let input: string = document.querySelector("input").value;
    var tasklist: any = document.getElementById("tasklist");
    var newTask: any = document.createElement("li");
    var createCheckIcon: any = document.createElement("i");
    var createText: any = document.createElement("p");
    var createDelIcon: any = document.createElement("i");
    tasklist.appendChild(newTask);
    newTask.appendChild(createCheckIcon);
    createCheckIcon.classList.add("far", "fa-circle");
    createCheckIcon.setAttribute("id", "check");
    newTask.appendChild(createText);
    createText.innerHTML = input;
    newTask.appendChild(createDelIcon);
    createDelIcon.classList.add("far", "fa-trash-alt");
    //Funktionen für die Icons//
    createCheckIcon.addEventListener("click", function(): void {if (!checkedTask) {createCheckIcon.setAttribute("class", "far fa-check-circle"); checkedTask = true; } else {createCheckIcon.setAttribute("class", "far fa-circle"); checkedTask = false; }});
    createDelIcon.addEventListener("click", function(): void { tasklist.removeChild (newTask); counter--; document.getElementById("amount").innerHTML = "" + counter; });
}