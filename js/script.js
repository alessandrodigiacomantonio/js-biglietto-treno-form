function Acquista() {
  var passeggero = document.form.name.value;
  console.log(passeggero);
  passeggero = passeggero.match(/^[A-Za-z ]+$/);
  console.log(passeggero);
  var distanza = document.form.travel.value;
  console.log(distanza);
  distanza = Math.round(distanza);
  console.log(distanza);
  // if (distanza < 1 || distanza > 500 || isNaN(distanza)) {
  //   alert('Purtroppo hai inserito delle distanze non coperte dal nostro servizio di trasporti, ci spiace !');
  // } else {
  //     var prezzoDefault = distanza * 0.21;
  //     var eta = prompt("Qual è la tua età?");
  //     var anni = eta.match(/\d+/);
  //     anni = parseInt(anni);
  //     if (isNaN(anni)) {
  //       alert('Non hai inserito un\'età valida !');
  //     } else if (anni > 122) {
  //         alert('Sarebbe fantastico essere così longevi, ma hai un\'età maggiore della persona più anziana di tutti i tempi, il che mi sembra improbabile :D');
  //     } else if (anni >= 65) {
  //         var prezzo = (prezzoDefault - (prezzoDefault * 40 / 100)).toFixed(2);
  //         alert('Il prezzo del biglietto è di \n' + '€ ' + prezzo +'\n Grazie per aver scelto il nostro servizio e Buon Viaggio');
  //     } else if (anni < 65 && eta > 17) {
  //         alert('il prezzo del biglietto è di \n' + '€ ' + prezzoDefault.toFixed(2) + '\n Grazie per aver scelto il nostro servizio e Buon Viaggio');
  //     } else if (anni <= 17 && anni > 2) {
  //         var prezzo = (prezzoDefault - (prezzoDefault * 20 / 100)).toFixed(2);
  //         alert('Il prezzo del biglietto è di \n' + '€ ' + prezzo +'\n   Grazie per aver scelto il nostro servizio e Buon Viaggio');
  //     } else {
  //         alert('I bebè, fino a 2 anni, viaggiano gratis !');
  //     }
  // }
}
function Reset() {
  getId('form').reset();
}
//input--filled
  // document.getElementsByClassName('__ticket__content__passenger__name')[0].innerHTML=passeggero;
  // document.getElementsByClassName('__ticket__content__passenger__travel')[0].innerHTML=distanza;
