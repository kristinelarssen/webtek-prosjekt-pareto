
// setter index til 1, slik at første bilde vises først når siden er lastet inn
let slideIndex = 1;

// sørger for å vise bildene når sida lastes inn
showSlides(slideIndex);

// viser en bilde-slide
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}

// Blar til neste slide
function changeSlide(n) {
    showSlides(slideIndex += n);
}
