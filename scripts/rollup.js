// Javascript for scrollup-button


scrollupbutton = document.getElementById("js-scrollup");

// Knapp dukker opp når man scroller nedover på siden
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollupbutton.style.display = "block";
  } else {
    scrollupbutton.style.display = "none";
  }
}


// Scroller brukeren til toppen av siden når man trykker på knappen
scrollupbutton.addEventListener("click",topFunction)

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox osv. 
}