// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

/*
1. Estrazione numero casuale per il computer

2. chiedo all'utente di estrarre un numero da 1 a 6

3. confronto i due numeri

4. stampo il risultato
*/ 

const numeroPc = Math.ceil(Math.random() * 6);
let numeroUtente;
let message;
let isCorrect; // dichiaro la variabile ma non posso inizializzarla fuori dal ciclo

do {
  isCorrect=true; //All'inizio di ogni ciclo la inizializzo a true, altrimenti se dovesse cambiare rimarrebbe false
  numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 6"));

  if(isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 6){
    message = "Non hai scelto un numero valido. Riprova."
    isCorrect=false;
   } else if(numeroPc>numeroUtente){
    message = 
    `Il computer ha scelto ${numeroPc}.
    Tu hai scelto ${numeroUtente}.
    Hai perso.`;   
  } else if(numeroPc<numeroUtente){
    message = 
    `Il computer ha scelto ${numeroPc}.
    Tu hai scelto ${numeroUtente}.
    Hai vinto.`;   
  } else{
    message = 
    `Il computer ha scelto ${numeroPc}.
    Tu hai scelto ${numeroUtente}.
    Pareggio`; 
  }

  console.log(message);

} while(!isCorrect);