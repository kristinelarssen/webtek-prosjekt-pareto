// Javascript for scrollup-button
scrollupbutton = document.getElementById("js-scrollup");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollupbutton.style.display = "block";
  } else {
        scrollupbutton.style.display = "none";
  }
}

scrollupbutton.addEventListener("click",topFunction)

//Når brukeren trykker på knappen scroller den til toppen av siden.
function topFunction() {
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0;  //for andre nettlesere
}