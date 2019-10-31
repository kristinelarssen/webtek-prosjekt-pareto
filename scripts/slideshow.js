/*
FILE NAME: slideshow.js
WRITTEN BY: Kristine Larssen
WHEN: November 2019
PURPOSE: Bildeshow på fremsiden. Manuell og automatisk bytting av bilder
*/


// setter bilde-index til 1, slik at første bilde vises når siden blir lastet inn
let photoIndex = 1;

// Viser bildene
function showPhotos(n) {
    let photos = document.getElementsByClassName("photo");
    if (n < 1) {
        photoIndex = photos.length;
    }
    if (n > photos.length) {
        photoIndex = 1;
    }
    for (let i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";
    }
    photos[photoIndex - 1].style.display = "block";

}

// Blar til neste/forrige bilde
function changePhoto(n) {
    showPhotos(photoIndex += n);
}

// sørger for at bildene byttes hver 4 sekund
function autoChange() {
    let photos = document.getElementsByClassName('photo');
    if (photoIndex > photos.length) {
        photoIndex = 1;
    }
    for (i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";
    }
    photos[photoIndex - 1].style.display = "block";
    photoIndex++;
    setTimeout(autoChange, 6000);
}

// sørger for å vise bildene når sida lastes inn, og bytte automaisk hvert 6 sekund
showPhotos(photoIndex);
autoChange();