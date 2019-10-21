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
    createModElement("a", lielements[0], "Om Pareto", "om_pareto.html", [["class", "js-header-link"], "id", "js-dropdown"]);
    createModElement("a", lielements[1], "Arrangementer", "arrangementer.html", ["class", "js-header-link"]);
    createModElement("a", lielements[2], "Ny student?", "ny_student.html", ["class", "js-header-link"]);
    createModElement("a", lielements[3], "Bli medlem", "bli_medlem.html", ["class", "js-header-link"]);
    createModElement("a", lielements[4], "Kontakt oss", "kontakt.html", ["class", "js-header-link"]);
    createModElement("a", lielements[5], "Econnect", "econnect.html", ["class", "js-header-link"]);
}

function createFooter(tarElement) {
    createModElement("div", tarElement, "", "", [["id", "js-footer-divikon"], ["class", "js-footer-div"]]);
    createModElement("div", tarElement, "", "", [["id", "js-footer-divkontakt"], ["class", "js-footer-div"]]);
    createModElement("div", tarElement, "", "", [["id", "js-footer-divadresse"], ["class", "js-footer-div"]]);

    const divikon = document.querySelector("#js-footer-divikon");
    const divkontakt = document.querySelector("#js-footer-divkontakt");
    const divadresse = document.querySelector("#js-footer-divadresse");

    createModElement("ul", divikon, "", "", ["id", "ulikon"]);
    createModElement("ul", divkontakt, "", "", ["id", "ulkontakt"]);
    createModElement("ul", divadresse, "", "", ["id", "uladresse"]);

    const ulikon = document.querySelector("#ulikon");
    const ulkontakt = document.querySelector("#ulkontakt");
    const uladresse = document.querySelector("#uladresse");

    createModElement("li",ulikon);
    createModElement("li",ulikon);
    createModElement("li",ulikon);

    createModElement("p",ulkontakt,"Kontakt","",["id","js-footer-kontakthead"]);
    createModElement("li",ulkontakt);
    createModElement("li",ulkontakt);
    createModElement("li",ulkontakt);
    createModElement("li",ulkontakt);

    createModElement("p",uladresse,"Besøksadresse");
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

//test
const headertar = document.querySelector("#js-header");
const footertar = document.querySelector("#js-footer");
createNavbar(headertar);
createFooter(footertar);
