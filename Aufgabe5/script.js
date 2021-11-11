var africa2008 = 1028;
var africa2018 = 1235.5;
var sthamerica2008 = 1132.6;
var sthamerica2018 = 1261.5;
var europe2008 = 4965.7;
var europe2018 = 4209.3;
var nrtamerica2008 = 6600.4;
var nrtamerica2018 = 6035.6;
var asia2008 = 12954.7;
var asia2018 = 16274.1;
var australia2008 = 1993;
var australia2018 = 2100.5;
var gesamt = africa2018 + sthamerica2018 + europe2018 + nrtamerica2018 + asia2018 + australia2018;
console.log('Die Emission von Afrika ist: ' + africa2018 + '\nRelativ zur Gesamtemission der Welt verusacht Afrika damit '
    + (africa2018 / gesamt * 100).toFixed(0) + '%.\nFür Afrika hat sich 2018 im Vergleich zu 2008 die Emission um '
    + ((africa2018 / africa2008 - 1) * 100).toFixed(0) + '% geändert.\n2018 im Vergleich zu 2008 sind das ' + (africa2018 - africa2008).toFixed(0) + ' kg CO2');
console.log('Die Emission von Südamerika ist: ' + sthamerica2018 + '\nRelativ zur Gesamtemission der Welt verusacht Südamerika damit '
    + (sthamerica2018 / gesamt * 100).toFixed(0) + '%.\nFür Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um '
    + ((sthamerica2018 / sthamerica2008 - 1) * 100).toFixed(0) + '% geändert.\n2018 im Vergleich zu 2008 sind das ' + (sthamerica2018 - sthamerica2008).toFixed(0) + ' kg CO2');
console.log('Die Emission von Europa ist: ' + europe2018 + '\nRelativ zur Gesamtemission der Welt verusacht Europa damit '
    + (europe2018 / gesamt * 100).toFixed(0) + '%.\nFür Europa hat sich 2018 im Vergleich zu 2008 die Emission um '
    + ((europe2018 / europe2008 - 1) * 100).toFixed(0) + '% geändert.\n2018 im Vergleich zu 2008 sind das ' + (europe2018 - europe2008).toFixed(0) + ' kg CO2');
console.log('Die Emission von Nordamerika ist: ' + nrtamerica2018 + '\nRelativ zur Gesamtemission der Welt verusacht Nordamerika damit '
    + (nrtamerica2018 / gesamt * 100).toFixed(0) + '%.\nFür Afrika hat sich 2018 im Vergleich zu 2008 die Emission um '
    + ((nrtamerica2018 / nrtamerica2008 - 1) * 100).toFixed(0) + '% geändert.\n2018 im Vergleich zu 2008 sind das ' + (nrtamerica2018 - nrtamerica2008).toFixed(0) + ' kg CO2');
console.log('Die Emission von Asien ist: ' + asia2018 + '\nRelativ zur Gesamtemission der Welt verusacht Asien damit '
    + (asia2018 / gesamt * 100).toFixed(0) + '%.\nFür Asien hat sich 2018 im Vergleich zu 2008 die Emission um '
    + ((asia2018 / asia2008 - 1) * 100).toFixed(0) + '% geändert.\n2018 im Vergleich zu 2008 sind das ' + (asia2018 - asia2008).toFixed(0) + ' kg CO2');
console.log('Die Emission von Australien ist: ' + australia2018 + '\nRelativ zur Gesamtemission der Welt verusacht Australien damit '
    + (australia2018 / gesamt * 100).toFixed(0) + '%.\nFür Australien hat sich 2018 im Vergleich zu 2008 die Emission um '
    + ((australia2018 / australia2008 - 1) * 100).toFixed(0) + '% geändert.\n2018 im Vergleich zu 2008 sind das ' + (australia2018 - australia2008).toFixed(0) + ' kg CO2');
//# sourceMappingURL=script.js.map