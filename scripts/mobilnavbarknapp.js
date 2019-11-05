const menyknapp = document.getElementById("js-menyknapp")
const navliste = document.getElementById("js-header-ul")

menyknapp.addEventListener("click",menuHideShow);

function menuHideShow() {

    if (navliste.style.display == "block") {
        navliste.style.display = "none";
    }
    else {
        navliste.style.display = "block";
    }
}