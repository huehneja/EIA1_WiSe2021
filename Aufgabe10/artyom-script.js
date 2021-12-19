window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            counter++;
            var checkedTask = false;
            var input = wildcard;
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
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
