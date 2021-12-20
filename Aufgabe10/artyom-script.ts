declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            //Abgespeckte Kopie von meinem Hauptscript ohne Regenbogen, Color und Timestamp//
                counter++;
                let checkedTask: boolean = false;
                let input: string = wildcard;
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
                createCheckIcon.addEventListener("click", function(): void {if (!checkedTask) {createCheckIcon.setAttribute("class", "far fa-check-circle"); checkedTask = true; donecount++; } else {createCheckIcon.setAttribute("class", "far fa-circle"); checkedTask = false; donecount--; } updateCounter(); });
                createDelIcon.addEventListener("click", function(): void { tasklist.removeChild (newTask); counter--; if (!checkedTask) {leftcount--; } else {donecount--; } document.getElementById("amount").innerHTML = "" + counter; updateCounter(); });
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});