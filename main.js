//chiediamo all'utente i dati
const km = prompt('quanti km devi percorrere?', 'es. 150');
const age = prompt('quanti anni hai?', 'es,13');

//calcoliamo il prezzo del biglietto
const price = km * 0.21;
let discount = 0;

if (age < 18) {
    discount = price * 0.2;
} else if (age > 65) {
    discount = price * 0.4;
}

const finalPrice = price - discount;

//mostriamo il prezzo finale all'utente
alert('Il prezzo del tuo biglietto è: ' + finalPrice.toFixed(2) + '€');

