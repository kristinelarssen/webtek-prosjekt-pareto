/*
FILE NAME: slideshow.js
WRITTEN BY: Kristine Larssen
WHEN: November 2019
PURPOSE: Bildeshow på fremsiden. Manuell og automatisk bytting av bilder.
*/


// setter bilde-index til 0, slik at første bilde vises når siden blir lastet inn
let photoIndex = 0;
let slideshow = document.getElementById("slideshow");
let photos = ["img/photoshow.png", "img/photoshow2.png", "img/photoshow3.png", "img/photoshow4.png", "img/photoshow5.png"];


// Viser bildene; viser bildet med bestemt bildeindeks, og gjømmer de andre
const showPhotos = (i) => {
    if (i > photos.length - 1) {  // når man er komt til enden, starter man på nytt
        photoIndex = 0;
    }

    if (i < 0) {  // om man er komt til starten, blar man til bakerste bilde
        photoIndex = photos.length - 1;
    }

    slideshow.setAttribute("src", photos[photoIndex]);
}

// Blar til neste/forrige bilde
const changePhoto = (i) => {
    showPhotos(photoIndex += i);
}

// sørger for at bildene byttes hver 4 sekund
const autoChange = () => {
    if (photoIndex > photos.length - 1) {
        photoIndex = 0;  // om man er komt til enden, starter man på nytt
    }

    slideshow.setAttribute("src", photos[photoIndex]);
    photoIndex++;

    setTimeout(autoChange, 6000);  // venter 6 sekund før funksjonen kalles på nytt
}

// sørger for å vise bildene når sida lastes inn, og bytte automaisk hvert 6 sekund
showPhotos(photoIndex);
autoChange();