function createNavbar(tarElement) {
    createModElement("img","",tarElement,"",[["src","img/pareto_logo.png"],["id","js-header-logo"],["alt","Pareto-logo"]]);
    createModElement("a", "Om Pareto",tarElement,"om_pareto.html",["class","js-header-element"]);
    createModElement("a", "Arrangmenter",tarElement,"arrangementer.html",["class","js-header-element"]);
    createModElement("a", "Ny student?",tarElement,"ny_student.html",["class","js-header-element"]);
    createModElement("a", "Bli medlem",tarElement,"bli_medlem.html",["class","js-header-element"]);
    createModElement("a", "Kontakt oss",tarElement,"kontakt.html",["class","js-header-element"]);
    createModElement("a", "Econnect",tarElement,"econnect.html",["class","js-header-element"]);
}

function createFooter() {

}


// eleattr = enten et array med ["attribute","verdi"] eller matrise [["attribute","verdi"],["attribute","verdi"], ..., ...]
function createModElement(tagName, content, tar, url = "", eleattr = "") {
    const node = document.createElement(tagName);
    const textnode = document.createTextNode(content);
    node.appendChild(textnode);
    if (url !== "") {
        node.setAttribute("href", url);
    }
    if (Array.isArray(eleattr)) {
        if (Array.isArray(eleattr[0])) {
            for (i = 0; i < eleattr.length; i++) {
                node.setAttribute(eleattr[i][0],eleattr[i][1]);
            }
        }
        else {
            node.setAttribute(eleattr[0],eleattr[1]);
        }
    }
    tar.appendChild(node);
}

//test
const headertarget = document.querySelector("#js-header");
createNavbar(headertarget)