// Mail

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Non è necessario provvedere alla validazione delle email

/* 
1. creazione lista di email autorizzate inizializzata con 10 email

2. richiesta email all'utente

3. controllo se la mail è presente nella lista

4. stampo il risultato

*/

const emailAutorizzate = [
  'mario.rossi123@example.com',
  'giulia.bianchi87@mail.com',
  'luca.verdi.pro@gmail.com',
  'anna.ferrari99@posta.net',
  'federico.nobile2024@webmail.org',
  'sofia.gialli78@cloudmail.com',
  'davide.monti007@inbox.it',
  'alessandra.roma@fastmail.com',
  'giovanni.blu@service.net',
  'ilaria.ceruleo@custommail.org',
]

let emailUtente='';
let message;
let isPresent=false;  //inizialmente isPresent controlla se la @ è presente nella stringa inserita, successivamente controlla se la parola inserita è presente nella lista

do{
  emailUtente=prompt("Inserisci la tua email");
  if(!emailUtente.includes("@") ){
    message="Mail non valida";
  } else if(!emailAutorizzate.includes(emailUtente)){
    message="Non puoi accedere";
  } else {
    message="Puoi accedere";
    isPresent=true;
  }

  console.log(message);

}while (!isPresent)


