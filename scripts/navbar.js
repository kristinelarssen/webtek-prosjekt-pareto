function createNavbar(tarElement) {
    createModElement("nav", tarElement, "", "", ["id", "js-navbar"]);

    const navbar = document.querySelector("#js-navbar");
    createModElement("a",navbar,"","index.html",["id","js-header-logo"])
    createModElement("img",document.querySelector("#js-header-logo"), "", "", [["src", "img/pareto_logo.png"], ["id", "js-header-logo"], ["alt", "Pareto-logo"]]);
    createModElement("ul", navbar, "", "", ["id", "js-navbar-ul"]);

    for (i = 0; i < 6; i++) {
        createModElement("li", navbar, "", "", ["class", "js-header-li"]) 
    }
    const lielements = document.getElementsByClassName("js-header-li")
    createModElement("a", lielements[0], "Om Pareto", "om_pareto.html", ["class", "js-header-link"]);
    createModElement("a", lielements[1], "Arrangmenter", "arrangementer.html", ["class", "js-header-link"]);
    createModElement("a", lielements[2], "Ny student?", "ny_student.html", ["class", "js-header-link"]);
    createModElement("a", lielements[3], "Bli medlem", "bli_medlem.html", ["class", "js-header-link"]);
    createModElement("a", lielements[4], "Kontakt oss", "kontakt.html", ["class", "js-header-link"]);
    createModElement("a", lielements[5], "Econnect", "econnect.html", ["class", "js-header-link"]);
}

function createFooter(tarElement) {
    create

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
const footertar = document.querySelector("#js-footer")
createNavbar(headertar)
