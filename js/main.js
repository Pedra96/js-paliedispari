/*
-----------------------------------------Esercizio Palidromo-------------------------------------------------------

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata
*/

let parolaUser=prompt("dammi una parola per vedere se è palindroma");


//chiama la funzione dopo aver inserito il promp
isPalindromo(parolaUser);

//funzione per il controllo se la stringa è palindroma
function isPalindromo(string){
    let stringSplit=string.split("");
    let stringJoin="";

for(let i=0;i<string.length;i++){
 stringJoin+=stringSplit[stringSplit.length-1];
 console.log(stringJoin)
 stringSplit.pop();
}
console.log(stringJoin==string);
}




















/*

---------------------------------------------Esercizio Pari o Dispari--------------------------------------------------
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/