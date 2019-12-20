function Acquista() {
  var passeggero = document.form.name.value;
  passeggero = passeggero.match(/^[A-Za-z ]+$/);
  distanza = Math.round(distanza);
  var eta = document.form.choseAge.value;
  if (passeggero == null || /\S/.test(passeggero) == false) {
    alert('Ops, qualcosa è andato storto: hai inserito un nome non valido, sono ammessi solo caratteri alfabetici e spazi !');
  } else if (distanza < 1 || distanza == null) {
    alert('Purtroppo hai inserito delle distanze non coperte dal nostro servizio di trasporti, ci spiace !');
  } else {
      document.getElementsByClassName('main__section__ticket')[0].classList.remove('opacity_0');
      var prezzoDefault = distanza * 0.21;
      if (eta == 'over65') {
      var prezzo = (prezzoDefault - (prezzoDefault * 0.4)).toFixed(2);
      document.getElementsByClassName('__data__discount')[0].innerHTML='Biglietto Silver';
      document.getElementsByClassName('__data__cost')[0].innerHTML='€ ' + prezzo;
    } else if (eta == 'maggiorenne') {
      document.getElementsByClassName('__data__discount')[0].innerHTML='Biglietto Standard';
      document.getElementsByClassName('__data__cost')[0].innerHTML='€ ' + prezzoDefault.toFixed(2);
    } else {
          var prezzo = (prezzoDefault - (prezzoDefault * 0.2)).toFixed(2);
          document.getElementsByClassName('__data__discount')[0].innerHTML='Biglietto Junior';
          document.getElementsByClassName('__data__cost')[0].innerHTML='€ ' + prezzo;
          document.getElementsByClassName('__ticket__content__passenger__name')[0].innerHTML=passeggero;
          var binario = (Math.ceil(Math.random()*10));
          document.getElementsByClassName('__data__platform')[0].innerHTML=binario;
          var codiceCP = (Math.ceil(Math.random()*10000)+90000);
          document.getElementsByClassName('__data__code')[0].innerHTML=codiceCP;
      }
  }

}
function Reset() {
  document.getElementsByClassName('main__section__ticket')[0].classList.add('opacity_0');
  document.getElementById('form').reset();
}
//input--filled
