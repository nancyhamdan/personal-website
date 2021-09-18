let xsltProcessor = new XSLTProcessor();

window.onload = function() {
    // load xslt file
    //not asynchrosnous so it blocks because need it to finish first
    getFile(loadXSLT, "./styles/projects-style.xsl", false);

    // load and render xml file
    getFile(renderXML, "./projects.xml", true);
}

function getFile(callback, path, isAsync) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                callback(xhttp.responseText);
            }
        }
    };
    xhttp.open("GET", path, isAsync);
    xhttp.send();
}

function parseTextToXML(text) {
    let parser = new DOMParser();
    let xml = parser.parseFromString(text, "application/xml");
    return xml;
}

function loadXSLT(xslText) {
    let xsl = parseTextToXML(xslText);
    console.log("xsl:", xsl);
    xsltProcessor.importStylesheet(xsl);
}

function renderXML(xmlText) {
    let xml = parseTextToXML(xmlText);
    console.log("xml:", xml);
    let transformedXML = xsltProcessor.transformToFragment(xml, document);
    document.getElementById("main-content").appendChild(transformedXML);
}