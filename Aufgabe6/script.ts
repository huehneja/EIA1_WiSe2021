//Variablen für die einzelnen Emissionswerte der Länder, jeweils 2008 und 2018//
var africa2008 : number = 1028;
var africa2018 : number = 1235.5;

var sthamerica2008 : number = 1132.6;
var sthamerica2018 : number = 1261.5;

var europe2008 : number = 4965.7;
var europe2018 : number = 4209.3;

var nrtamerica2008 : number = 6600.4;
var nrtamerica2018 : number = 6035.6;

var asia2008 : number = 12954.7;
var asia2018 : number = 16274.1;

var australia2008 : number = 1993;
var australia2018 : number = 2100.5;

//Variable für die Gesamtemission//
var gesamt : number = africa2018 + sthamerica2018 + europe2018 + nrtamerica2018 + asia2018 + australia2018;

window.addEventListener("load", function() {
function continent (continent2008, continent2018, continent) 
{
    //Rechen- und andere Operationen, die die Werte für den gewählen Kontinent berechnen bzw. ausgeben//
    document.getElementById("Emission").innerHTML = continent2018.toFixed(2);
    document.getElementById("RealEmiss").innerHTML = (continent2018 / gesamt*100).toFixed(2)+"%";
    document.getElementById("GrowthPer").innerHTML = ((continent2018 / continent2008-1)*100).toFixed(2)+"%";
    document.getElementById("GrowthAbs").innerHTML = (continent2018-continent2008).toFixed(2);
    document.getElementById("chart").setAttribute("style" , "height:" + (continent2018 / gesamt*100).toFixed(2)+"%;" )
    document.getElementById("titleRegion").innerHTML = continent;
    document.querySelector("continent").innerHTML = continent;
};
    //Auswahl des Kontinenten, der in der function continent weiterverarbeitet und ausgegeben wird//
    document.querySelector(".africa").addEventListener("click", function () {continent(africa2008, africa2018, "Carbon Dioxide Emissions of Africa")});
    document.querySelector(".europe").addEventListener("click", function () {continent(europe2008, europe2018, "Carbon Dioxide Emissions of Europe")});
    document.querySelector(".asia").addEventListener("click", function () {continent(asia2008, asia2018, "Carbon Dioxide Emissions of Asia")});
    document.querySelector(".southamerica").addEventListener("click", function () {continent(sthamerica2008, sthamerica2018, "Carbon Dioxide Emissions of South America")});
    document.querySelector(".northamerica").addEventListener("click", function () {continent(nrtamerica2008, nrtamerica2018, "Carbon Dioxide Emissions of North America")});
    document.querySelector(".australia").addEventListener("click", function () {continent(australia2008, australia2018, "Carbon Dioxide Emissions of Australia")});

})