//Javascript for header/navbar og footer.

// Targets for å opprette navbar og footer i html.
const headertar = document.querySelector("#js-header");
const footertar = document.querySelector("#js-footer");
createNavbar(headertar);
createFooter(footertar);


function createNavbar(tarElement) {
    createModElement("nav", tarElement, "", "", ["id", "js-navbar"]);

    const navbar = document.querySelector("#js-navbar");
    createModElement("a", navbar, "", "index.html", ["id", "js-header-logo"]);

    const logo = document.querySelector("#js-header-logo");
    createModElement("img", logo, "", "", [["src", "img/pareto_logo.png"], ["id", "js-header-logoimg"], ["alt", "Pareto-logo"]]);
    createModElement("ul", navbar, "", "", ["id", "js-header-ul"]);

    for (i = 0; i < 6; i++) {
        createModElement("li", document.querySelector("#js-header-ul"), "", "", ["class", "js-header-li"]);
    }

    const lielements = document.getElementsByClassName("js-header-li");
    /* createModElement("a", lielements[0], "Om Pareto", "om_pareto.html", [["class", "js-header-link"], "id", "js-dropdown"]); */
    createModElement("div",lielements[0],"","",[["class","dropdown"],["id","js-dropcontainer"]]);
    createModElement("a",document.getElementById("js-dropcontainer"),"Om oss ▼","",[["onclick","dropdownFunction()"],["class","dropdownButton js-header-link"],["id","dropdownOmOss"]])
    createModElement("div",document.getElementById("js-dropcontainer"),"","",[["id","Dropdown"],["class","dropdownItems"]])
    createModElement("a",document.getElementById("Dropdown"),"Om Pareto","om_pareto.html",["class","js-header-link"])
    createModElement("a",document.getElementById("Dropdown"),"Komiteer","komiteer.html",["class","js-header-link"])
    createModElement("a",document.getElementById("Dropdown"),"Styret","styret.html",["class","js-header-link"])
    createModElement("a",document.getElementById("Dropdown"),"Vedtekter","vedtekter.html",["class","js-header-link"])

    createModElement("a", lielements[1], "Arrangementer", "arrangementer.html", ["class", "js-header-link"]);
    createModElement("a", lielements[2], "Ny student?", "ny_student.html", ["class", "js-header-link"]);
    createModElement("a", lielements[3], "Bli medlem", "bli_medlem.html", ["class", "js-header-link"]);
    createModElement("a", lielements[4], "Kontakt oss", "kontakt-oss.html", ["class", "js-header-link"]);
    createModElement("a", lielements[5], "Econnect", "econnect.html", ["class", "js-header-link"]);

    // Oppretter knapp og img-element for rollup.js
    createModElement("button",navbar,"","",[["id","js-scrollup"],["title","Gå til toppen"]]); /* !Button for scrollup! */
    createModElement("img",document.getElementById("js-scrollup"),"","",[["src","img/scrollupikon.jpg"],["alt","scrollicon"],["width","50"],["height","50"]]);

    // Oppretter knapp som viser/gjemmer navbar for mobil. 

    createModElement("a",navbar,"","#",["id","js-menyknapp"]);
    createModElement("img",document.getElementById("js-menyknapp"),"","",[["id","js-menysvg"],["src","img/ico/menyknapp.svg"],["alt","Menyknapp"],["width","48"],["height","48"]])

}

function createFooter(tarElement) {
    createModElement("div", tarElement, "", "", [["id", "js-footer-divikon"], ["class", "js-footer-div"]]);
    createModElement("div", tarElement, "", "", [["id", "js-footer-divkontakt"], ["class", "js-footer-div"]]);
    createModElement("div", tarElement, "", "", [["id", "js-footer-divadresse"], ["class", "js-footer-div"]]);

    const divikon = document.querySelector("#js-footer-divikon");
    const divkontakt = document.querySelector("#js-footer-divkontakt");
    const divadresse = document.querySelector("#js-footer-divadresse");

    createModElement("h5",divadresse,"Besøksadresse","",["class","js-footer-ulhead"]);
    createModElement("h5",divkontakt,"Kontakt","",["class","js-footer-ulhead"]);

    createModElement("ul", divikon, "", "", ["id", "ulikon"]);
    createModElement("ul", divkontakt, "", "", ["id", "ulkontakt"]);
    createModElement("ul", divadresse, "", "", ["id", "uladresse"]);

    const ulikon = document.querySelector("#ulikon");
    const ulkontakt = document.querySelector("#ulkontakt");
    const uladresse = document.querySelector("#uladresse");

    createModElement("li",ulikon);
    createModElement("li",ulikon);
    createModElement("li",ulikon);

    createModElement("a",ulikon.children[0],"","index.html",["id","js-parico"])
    createModElement("a",ulikon.children[1],"","https://www.facebook.com/paretolinjeforening/",["id","js-faceico"])
    createModElement("a",ulikon.children[2],"","https://www.instagram.com/paretolinjeforening",["id","js-instaico"])

    createModElement("img",document.getElementById("js-parico"),"","",[["src","img/ico/pareto.png"],["alt","Pareto-ikon"],["width","32"]])
    createModElement("img",document.getElementById("js-faceico"),"","",[["src","img/ico/facebook.png"],["alt","Facebook-ikon"],["width","32"]])
    createModElement("img",document.getElementById("js-instaico"),"","",[["src","img/ico/instagram.png"],["alt","Instagram-ikon"],["width","32"]])
    
    createModElement("li",ulkontakt,"Styret: ");
    createModElement("li",ulkontakt);
    createModElement("li",ulkontakt,"Turkom: ");
    createModElement("li",ulkontakt,"Fadderkom: ");

    createModElement("a",ulkontakt.children[0],"pareto.linjeforening@gmail.com","mailto:pareto.linjeforening@gmail.com")
    createModElement("a",ulkontakt.children[1],"Vilfredo Pareto","https://www.facebook.com/vilfredo.pareto.370")
    createModElement("a",ulkontakt.children[2],"pareto.linjeforening.tur@gmail.com","mailto:pareto.linjeforening.tur@gmail.com")
    createModElement("a",ulkontakt.children[3],"pareto.fadderkom@gmail.com","mailto:pareto.fadderkom@gmail.com")

    
    createModElement("li",uladresse,"Etasje 3, 3056");
    createModElement("li",uladresse,"NTNU Adolf Øien Bygget");
    createModElement("li",uladresse,"Klæbuveien 72");
    createModElement("li",uladresse,"7030 Trondheim");
}


// eleattr = enten et array med ["attribute","verdi"] eller matrise [["attribute","verdi"],["attribute","verdi"], ..., ...]
function createModElement(tagName, tar, content = "", url = "", eleattr = "") {
    const node = document.createElement(tagName);
    const textnode = document.createTextNode(content);
    node.appendChild(textnode);
    if (url !== "") {
        node.setAttribute("href", url);
    }
    if (Array.isArray(eleattr)) {
        if (Array.isArray(eleattr[0])) {
            for (i = 0; i < eleattr.length; i++) {
                node.setAttribute(eleattr[i][0], eleattr[i][1]);
            }
        }
        else {
            node.setAttribute(eleattr[0], eleattr[1]);
        }
    }
    tar.appendChild(node);
}