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
