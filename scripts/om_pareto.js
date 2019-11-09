let konfetti = document.getElementsByClassName('om_oss_konfetti')
let liste_tall = document.getElementsByClassName('om_oss_faktaboks_tall')
let liste_tekst = document.getElementsByClassName('om_oss_faktaboks_tekst')
let medlemsnummer = document.getElementById('om_oss_medlemsnummer');

function medlemmer() {
  medlemsnummer.innerText = localStorage.getItem("medlemmer");
}



if (localStorage.getItem("medlemmer") === null) {
  localStorage.setItem("medlemmer", medlemsnummer.innerText)
}

else {
  medlemmer()
}

function show_konfetti() {
  for(a=0; a<3; a++) {
    konfetti[a].style.display = 'block';
  }
  for(i=0; i<3; i++) {
    liste_tall[i].style.marginTop = '-65px'
  }
}

function hide_konfetti() {
  for(a=0; a<3; a++) {
    konfetti[a].style.display = 'none';
  }
  for(i=0; i<3; i++) {
    liste_tall[i].style.marginTop = '30px'
  }
}
