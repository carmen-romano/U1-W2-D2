/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const numberInt = [33,20]
numberInt.sort()
console.log("Il numero più grande è:", numberInt[1])


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let number = 10

if(number === 5){
  console.log ("Equal")
}
else{ console.log("not equal")}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let enterNumber = 50

if (enterNumber%5 === 0){
  console.log(enterNumber, "è divisibile per 5")}
  else{console.log(enterNumber, "non è divisibile per 5")}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let number1= 4
let number2= 12

if(number1===8 || number2 ===8) {
  console.log(number1, "è uguale ad 8")
}
else if (number1 + number2 === 8 || number1-number2===8 || number2 - number1 ===8){
  console.log("la sottrazione/addizione dei due numeri è pari ad 8")
}
else{
  console.log("i numeri non sono uguali ad 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 70
const shippingCosts= 10
if(totalShoppingCart > 50){
  console.log("Il totale del carrello è: ", totalShoppingCart)}
  else{
    console.log("Il totale del carrello aver aggiunto i costi di spedizione è", (totalShoppingCart+shippingCosts))
  }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const blackFriday = true

  if(blackFriday===true && totalShoppingCart>50) {
    console.log("Il tuo carrello dopo aver applicato lo sconto del 20% è:",
     totalShoppingCart - (totalShoppingCart * 20 / 100))
  }

  else if (blackFriday===true && totalShoppingCart<=50){
    console.log("Il tuo carrello dopo aver applicato lo sconto del 20% ed aver aggiunto i costi di spedizione è:", 
    totalShoppingCart - (totalShoppingCart * 20 / 100) + shippingCosts)
  }

  else if (totalShoppingCart > 50){
    console.log("Il totale del carrello è: ", totalShoppingCart)}
    else {
      console.log("Il totale del carrello aver aggiunto i costi di spedizione è", (totalShoppingCart+shippingCosts))
    }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let value1= 9
let value2= 8
let value3= 5
if (value1 > value2 && value1 > value3 && value2 >value3) {
console.log(value1,value2,value3)
} else if (value2 > value1 && value2 > value3 && value1 >value3) {
  console.log(value2,value1,value3)
} 
 else if (value3 > value1 && value3 > value1 && value1 >value2) {
  console.log(value3,value1,value2)
} 
  else {
  console.log(value3,value2,value1)
}

//OPPURE
let valori = [value1, value2, value3].sort((a, b) => b - a);
console.log("Valori ordinati in ordina crescente con SORT", valori)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const isNumber = 22

if (typeof isNumber === "number"){
  console.log(isNumber, "è un numero")
} else {
  console.log(isNumber, "non è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let everOrOdd = 40

if(everOrOdd%2===0){
  console.log(everOrOdd, "è un numero pari")
}else{
  console.log(everOrOdd, "è un numero dispari")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 3

if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale o maggiore di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"

console.log("dopo aver aggiunto la nuova proprietà 'city': ", me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log("dopo aver eliminato la proprietà 'lastName': ", me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.splice(2,1)
console.log("dopo aver eliminato l'ultimo elemento della proprietà 'skills': ", me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const emptyArray =[]
emptyArray.push(1,2,3,4,5,6,7,8,9,10)
console.log("Dopo aver aggiunto i numeri da 1 a 10: ", emptyArray)



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

emptyArray.splice(9,1, 100)
console.log("Dopo aver sostituito il numero '10' con il numero '100': ", emptyArray)
