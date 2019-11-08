let email1 = document.getElementById('email')
let email2 = document.getElementById('email2')

// Sjekker om emailer stemmer overens
function validateEmails() {
  if (email1.value !== email2.value) {
    email2.setCustomValidity('E-mailene stemmer ikke overens');
  } else {
    // inputet er gyldig -- reseter error-meldingen
    email2.setCustomValidity('');
  }
}

email1.addEventListener('input', validateEmails)
email2.addEventListener('input', validateEmails)



/* Legger til et medlem når man trykker på send inn */
let send_inn_knapp = document.getElementById('medlem_button')

function addMedlem() {
  let medlemsnummer = document.getElementById('om_oss_medlemsnummer').innerText;
  medlemsnummer.innerText = "321";
}

send_inn_knapp.addEventListener('click',addMedlem)



/* Mottaksbeskjed */
const popup = document.getElementById('medlem_innsending_mottatt')

function changeDisplay() {
  popup.style.display = 'block'
}
