function compte_a_rebours() {

var date_actuelle = new Date();

var date_evenement = new Date("Sep 12 00:00:00 2019");

var total_secondes = (date_evenement - date_actuelle) / 1000;

var jours = Math.floor(total_secondes / (60 * 60 * 24));
var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

document.getElementById ("compte_a_rebours").innerHTML = prefixe + jours + ' jours ' + heures + ' heures ' + minutes + ' minutes et ' + secondes + ' secondes.';

}