//Tastatursteuerung für Taskeingabe//
window.addEventListener("load", function(): void {
    document.querySelector("input").addEventListener("keydown", (event) => { if (event.keyCode === 13) { if (document.querySelector("input").value != "") { createTask(); document.querySelector("input").value = ""; } else {alert("Error 420: Input must not be empty!"); }}});

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
    createDelIcon.classList.add("fas", "fa-trash-alt");
    //Funktionen für die Icons//
    createCheckIcon.addEventListener("click", function(): void {if (!checkedTask) {createCheckIcon.setAttribute("class", "far fa-check-circle"); checkedTask = true; createCheckIcon.setAttribute("style", "color: #21d42a"); } else {createCheckIcon.setAttribute("class", "far fa-circle"); checkedTask = false; createCheckIcon.setAttribute("style", "color: white"); }});
    createDelIcon.addEventListener("click", function(): void { tasklist.removeChild (newTask); counter--; document.getElementById("amount").innerHTML = "" + counter; });
}