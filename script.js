/*  

// OPPGAVE 1
var num = prompt("Skriv et tall");

if (num > 0) {
    console.log("Tallet er positivt");
} else if (num < 0) {
    console.log("Tallet er negativt");
} else {
    console.log("Tallet er 0");
} 

*/

/*

// TEST 
var isRaining = prompt("Regner det?")

if (isRaining === "yes") {
    alert ("Bruk Paraply!")
} else {
    alert("Nei det regner ikke")
}

*/

/*
// OPPGAVE 2
var num = prompt("Skriv inn et tall");

num = parseInt(num);

if (num % 2 === 0) {
    alert(num + " er et partall.");
} else {
    alert(num + " er et oddetall.");
}
*/

// OPPGAVE 3

/*
var eksamenskarakter = prompt("Skriv inn eksamenskarakteren:");

eksamenskarakter = parseInt(eksamenskarakter);

if (isNaN(eksamenskarakter)) {
    alert("Vennligst skriv inn et gyldig tall.");
} else if (eksamenskarakter < 0 || eksamenskarakter > 100) {
    alert("Vennligst skriv inn en eksamenskarakter mellom 0 og 100.");
} else if (eksamenskarakter >= 50) {
    alert("Karakteren er bestått.");
} else {
    alert("Karakteren er ikke bestått.");
}
*/

// OPPGAVE 4
/*
var num = prompt ("Skriv et tall")

if (num == 1) {
    alert("Det er mandag");
} else if (num == 2) { alert("Det er Tirsdag") 
} else if (num == 3) { alert("Det er Onsdag") 
} else if (num == 4) { alert("Det er Torsdag") 
} else if (num == 5) { alert("Det er Fredag") 
} else if (num == 6) { alert("Det er Lørdag") 
} else if (num == 7) { alert("Det er Søndag") 
} else if (num < 1 || num > 7) { alert("Skriv et tall mellom 1-7")
} else (alert("Skriv et tall"))
*/

/*
// OPPGAVE 6
var num = prompt("Skriv et tall");

switch (parseInt(num)) {
    case 1:
        alert("Det er mandag");
        break;
    case 2:
        alert("Det er tirsdag");
        break;
    case 3:
        alert("Det er onsdag");
        break;
    case 4:
        alert("Det er torsdag");
        break;
    case 5:
        alert("Det er fredag");
        break;
    case 6:
        alert("Det er lørdag");
        break;
    case 7:
        alert("Det er søndag");
        break;
    default:
        alert("Skriv et tall mellom 1-7");
        break;
}
*/

/*
// OPPGAVE 7

var a = prompt("Skriv inn det første tallet");
var b = prompt("Skriv inn det andre tallet");

a = parseFloat(a);
b = parseFloat(b);

var sum, differanse, produkt, kvotient;

sum = a + b;
differanse = a - b;
produkt = a * b;
kvotient = a / b;

alert(
    a + " + " + b + " = " + sum + "\n" +
    a + " - " + b + " = " + differanse + "\n" +
    a + " * " + b + " = " + produkt + "\n" +
    a + " / " + b + " = " + kvotient
);


*/

// OPPGAVE 8
/*
var a = 4;
var b = 6;

if (a > b) {
    alert(a + " er større enn " + b);
} else if (a < b) {
    alert(a + " er mindre enn " + b);
} else {
    alert(a + " er lik " + b);
}
*/

// OPPGAVE 9
/*
var karakter1 = parseFloat(prompt("Skriv inn karakter 1:"));
var karakter2 = parseFloat(prompt("Skriv inn karakter 2:"));

var gjennomsnitt = (karakter1 + karakter2) / 2;

if (gjennomsnitt > 50) {
    alert("Din karakter: Bestått");
} else {
    alert("Din karakter: Ikke bestått");
}
*/

// OPPGAVE 10, 11, 12, 13
/*
var num = parseFloat(prompt("Skriv inn et tall:"));

if (num % 5 === 0) {
    alert(num + " er delbart med 5.");
} else {
    alert(num + " er delbart med 5.");
}

if (num % 3 === 0 && num % 5 === 0) {
    alert(num + " er delbart med 3 og 5.");
} else {
    alert(num + " er ikke delbart med både 3 og 5.");
}

if (num % 3 === 0 || num % 5 === 0) {
    alert(num + " er delbart med enten 3 eller 5.");
} else {
    alert(num + " er ikke delbart med verken 3 eller 5.");
}
*/

// OPPGAVE 14
/*
var tall1 = parseInt(prompt("Skriv inn det første tallet:"));
var tall2 = parseInt(prompt("Skriv inn det andre tallet:"));
var tall3 = parseInt(prompt("Skriv inn det tredje tallet:"));

var minsteTall = tall1;


if (tall2 < minsteTall) {
    minsteTall = tall2;
}

if (tall3 < minsteTall) {
    minsteTall = tall3;
}

alert("Det minste tallet av " + tall1 + ", " + tall2 + " og " + tall3 + " er: " + minsteTall);
*/

// OPPGAVE 15 
/*
var bokstav = prompt("Skriv inn en bokstav:").toLowerCase();


if (bokstav === 'a' || bokstav === 'e' || bokstav === 'i' || bokstav === 'o' || bokstav === 'u') {
    alert(bokstav + " er en vokal.");
} else {
    alert(bokstav + " er ikke en vokal.");
}
*/

// OPPGAVE 16 med html
/*
function printColor() {
    var colorInput = document.getElementById('colorInput').value;
    var outputDiv = document.getElementById('output');
    
    outputDiv.style.color = colorInput;
    
    outputDiv.innerHTML = "Denne teksten er: " + colorInput;
}
*/