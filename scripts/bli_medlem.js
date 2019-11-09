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

function addMedlem() {
  if(localStorage.getItem("medlemmer")=== null) {
    localStorage.setItem("medlemmer", 320 + 1 )
  } else {
    let medlemmer = parseInt(localStorage.getItem("medlemmer")) + 1
    localStorage.setItem("medlemmer", medlemmer)
  }


}
let send_inn_knapp = document.getElementById('medlem_button')

send_inn_knapp.addEventListener('click',function() {
  addMedlem()
})



/* Mottaksbeskjed */
const popup = document.getElementById('medlem_innsending_mottatt')

function changeDisplay() {
  popup.style.display = 'block'

}
