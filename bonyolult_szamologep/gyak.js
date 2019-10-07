"use strict"

let kiir = 0;
let feltolt = "";
let elsoSzam = 0;
let masodikSzam = 0;

function egy() {
    feltolt += 1;
    document.getElementById("ablak").value = +feltolt;

}
function ketto() {
    feltolt += 2;
    document.getElementById("ablak").value = +feltolt;

}
function harom() {
    feltolt += 3;
    document.getElementById("ablak").value = +feltolt;

}
function negy() {
    feltolt += 4;
    document.getElementById("ablak").value = +feltolt;

}
function ot() {
    feltolt += 5;
    document.getElementById("ablak").value = +feltolt;

}
function hat() {
    feltolt += 6;
    document.getElementById("ablak").value = +feltolt;

}
function het() {
    feltolt += 7;
    document.getElementById("ablak").value = +feltolt;

}
function nyolc() {
    feltolt += 8;
    document.getElementById("ablak").value = +feltolt;

}
function kilenc() {
    feltolt += 9;
    document.getElementById("ablak").value = +feltolt;

}
function nulla() {
    if(feltolt.length !=0){
    feltolt += 0;
    document.getElementById("ablak").value = +feltolt;
    }
}

function osszead() {
    elsoSzam = +feltolt;
    feltolt = "";
    document.getElementById("ablak").value = "";
}

function egyenlo() {
    masodikSzam = +feltolt;
    switch (muvelet) {
        case "osszeadas":
            document
    document.getElementById("ablak").value = +elsoSzam + +masodikSzam;
}

function kivonas() {
    elsoSzam = +feltolt;
    feltolt = "";
    document.getElementById("ablak").value = "";
}