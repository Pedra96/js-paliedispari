/*
-----------------------------------------Esercizio Palidromo-------------------------------------------------------

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata
*/

let parolaUser = prompt("dammi una parola per vedere se è palindroma");


//chiama la funzione dopo aver inserito il promp
isPalindromo(parolaUser);

//funzione per il controllo se la stringa è palindroma
function isPalindromo(string) {
    string = string.toLowerCase();
    let stringSplit = string.split("");
    let stringJoin = "";
    for (let i = 0; i < string.length; i++) {
        stringJoin += stringSplit[stringSplit.length - 1];
        console.log(stringJoin)
        stringSplit.pop();
    }
    if(stringJoin==string){
        console.log(stringJoin +" e "+ string + " sono un palindromo ");
    }else{
        console.log(string +" e " + stringJoin + " non sono un palindromo ");
    }
}



/*

---------------------------------------------Esercizio Pari o Dispari--------------------------------------------------
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let numeroUser = prompt("inserisci un numero tra 1 e 5");
let userGamble;
while (numeroUser <= 0 || numeroUser >= 6 || isNaN(numeroUser)) {
    numeroUser = prompt("hai inserito un numero minore di 1 o maggiore di 5 o una frase");
}

do {
    userGamble = prompt("scegli pari o dispari");
    userGamble.toLowerCase();
} while (userGamble !== "pari" && userGamble !== "dispari");

randomNumberPc();

//funzione per generare numero randomico per il computer
function randomNumberPc() {
    let min = 1;
    let max = 5;
    let numberPc = Math.floor(Math.random() * (max - min) + min);
    whoWon(numeroUser, numberPc, userGamble);

}

//funzione di controllo per vedere chi vince il giochino del pari o dispari
function whoWon(user, computer, gamble) {
    user = parseInt(user);
    console.log(user + " " + computer)
    somma = user + computer;
    if (somma % 2 == 0 && gamble == "pari" || somma % 2 != 0 && gamble == "dispari") {
        console.log("Hai vinto");
    }
    else {
        console.log("Ha vinto il computer");
    }
}