function createNavbar(tarElement) {

}

function createFooter() {

}


// eleattr = array på formen
function createModElement(tagName, content, tar, url = "", eleattr = "") {
    const node = document.createElement(tagName);
    const textnode = document.createTextNode(content);
    node.appendChild(textnode);
    if (url !== "") {
        node.setattribute("href", url);
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
createModElement("p", "Hei dette er en test", headertarget, "", [["class", "box"],["required",""]])