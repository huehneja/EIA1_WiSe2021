//Variablen für die Erschaffung des Kartenspiels und der einzelnen Stapel + Interface für die Karten//
var symbole: string [] = ["kreuz" , "pik", "herz" , "karo"];
var werte: string [] = ["A", "7", "8", "9", "10", "J", "Q", "K" ];
var ziehkarten: any [] = [];
var ablagekarten: any [] = [];
var spielerkarten: any [] = [];
var computerkarten: any [] = [];
interface Karten {symbol: string; wert: string; }
//Die Karten werden aus den symbole und werte Array erschaffen und in den Ziehkartenstapel gepusht//
for (var i: number = 0; i < werte.length; i++) {
    for (var x: number = 0; x < symbole.length; x++) {
        var karte: Karten = {symbol: symbole[x], wert: werte[i]};
        ziehkarten.push(karte);
    }
}
//Der Ziehkartenstapel wird gemischt//
function shuffle (kartendeck: any): any {
    for (var i: number = 0; i < 1337; i++) {
        var loc1: number = Math.floor((Math.random() * kartendeck.length));
        var loc2: number = Math.floor((Math.random() * kartendeck.length));
        var cloud: string = kartendeck[loc1];

        kartendeck[loc1] = kartendeck[loc2];
        kartendeck[loc2] = cloud;
    }
}
shuffle (ziehkarten);
//Der Karten werden an die Spieler & Computer Arrays verteilt//
for (var y: number = 0; y < 5; y++) {
    spielerkarten.push(ziehkarten.pop());
    computerkarten.push(ziehkarten.pop());
}
ablagekarten.push(ziehkarten.pop());
//EventListener für DOM Maniuplationen//
window.addEventListener("load", function(): void {
//Variablen für Zugreihenfolge und Spielende//
var myTurn: boolean = true;
var endGame: boolean = false; //diese Variable ist wahrscheinlich nicht unbedingt notwendig, hat aber das coden erleichtert und Fehler behoben//
//Funktionen für das Ziehen einer Karte vom Kartenstapel//
function ziehKarteComputer(): void {
    if (ziehkarten[0] == undefined) {
        alert("Bitte leg doch auch mal eine Karte!");
        endTurn();
    } else {
    computerkarten.push(ziehkarten.pop());
    endTurn();}
}
function ziehKarteSpieler(): void {
    if (ziehkarten[0] == undefined) {
        alert("Bitte leg doch auch mal eine Karte!");
    }
    if (!endGame && ziehkarten[0] != undefined) {
        spielerkarten.push(ziehkarten.pop());
        endTurn();  
    }
}
//Rendern des Spielfeldes//
updateInnerHTML();
//Funktion um die Karten zu rendern//
function updateInnerHTML (): void {
    //Zu Beginn werden die einzelnen Spielbereiche geleert, damit keine Doppelungen vorkommen//
    document.getElementById("ablagekarten").innerHTML = "";
    document.getElementById("spielerkarten").innerHTML = "";
    document.getElementById("computerkarten").innerHTML = "";
    //Spielerkarten werden gerendert//
    for (let i: number = 0; i < spielerkarten.length; i++) {
        var scard: any = document.createElement("div");
        var wert: any = document.createElement("p");
        wert.innerHTML = spielerkarten[i].wert;
        document.getElementById("spielerkarten").appendChild(scard);
        scard.appendChild(wert);
        scard.className = spielerkarten[i].symbol;
        if (myTurn) {
            //Wenn eine Karte spielbar ist erhält sie den EventListener, der sie auf den Ablagestapel legt und den Zug beendet//
        if (spielerkarten[i].symbol == ablagekarten[0].symbol || spielerkarten[i].wert == ablagekarten[0].wert) {
            scard.addEventListener("click", function(): void {if (!endGame) {ablagekarten.unshift(spielerkarten[i]), spielerkarten.splice(i, 1), endTurn();  }});
        }}
    }
    //Computerkarten werden gerendert//
    for (let i: number = 0; i < computerkarten.length; i++) {
        var ccard: any = document.createElement("div");
        document.getElementById("computerkarten").appendChild(ccard);

    }
    //Die oberste Karte vom Ablagestapel wird gerendert//
    document.getElementById("ablagekarten").innerHTML = "";
    var ablagecard: HTMLParagraphElement = document.createElement("div");
    var ablagewert: HTMLParagraphElement = document.createElement("p");
    document.getElementById("ablagekarten").appendChild(ablagecard);
    ablagecard.appendChild(ablagewert);
    ablagewert.innerHTML = ablagekarten[0].wert;
    ablagecard.className = ablagekarten[0].symbol;
}
//Beendet den Zug//
function endTurn (): void {
    myTurn = !myTurn;
    updateInnerHTML();
    //Check ob der Spieler gewonnen hat//
    if (spielerkarten[0] == undefined) {
        var textGewinnSP: HTMLParagraphElement = document.createElement("p");
        document.getElementById("test").appendChild(textGewinnSP);
        textGewinnSP.innerHTML = "Spieler gewinnt!";
        endGame = true;
    }
    //Check ob der Computer gewonnen hat//
    else if (computerkarten[0] == undefined) {
        var textGewinnCP: HTMLParagraphElement = document.createElement("p");
        document.getElementById("test").appendChild(textGewinnCP);
        textGewinnCP.innerHTML = "Computer gewinnt!";
        endGame = true;
        
    } else {
        //Check ob der Ziehstapel leer ist, wenn ja dann werden die Ablagekarten bis auf die Erste wieder in den Ziehstapel gepusht und gemischt (Funktioniert tatsächlich nur so halb aber es funktioniert)//
    if (ziehkarten[0] == undefined) {
    for (y = 0; y < ablagekarten.length; y++) {
        if (ablagekarten[y + 1] != undefined) {
            ziehkarten.push(ablagekarten[y + 1]);
            ablagekarten.splice(y + 1 , 1);
            shuffle (ziehkarten);
        }
    }}
    //Prüft ob der Computer oder der Spieler an der Reihe ist bzw. ob das Spiel bereits beendet ist//
    if (myTurn == false && !endGame) {
        computerTurn();
    }
}}
//Der Computer prüft nacheinander ob eine Karte spielbar ist, wenn das nicht der Fall ist zieht er eine Karte, ansonsten spielt er die spielbare Karte//
function computerTurn(): void {
    for (let x: number = 0; x < computerkarten.length; x++) {
        if (computerkarten[x].symbol == ablagekarten[0].symbol || computerkarten[x].wert == ablagekarten[0].wert) {
            ablagekarten.unshift(computerkarten[x]), computerkarten.splice(x, 1); endTurn();   break;
        }
    }
    if (!myTurn) {
        ziehKarteComputer();
    }
}
//Eventlistener für den Ziehkartenstapel//
document.getElementById("test").addEventListener("click", function(): void {ziehKarteSpieler(); });
});
