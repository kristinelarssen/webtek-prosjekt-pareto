// Javascript for scrollup-button
scrollupbutton = document.getElementById("js-scrollup");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollupbutton.style.display = "block";
  } else {
        scrollupbutton.style.display = "none";
  }
}

scrollupbutton.addEventListener("click",topFunction)

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}