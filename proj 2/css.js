function run() {
    let htmlCode = document.getElementById("html").value;
    let cssCode = document.getElementById("css").value;
    let output = document.getElementById("output");


    output.contentWindow.document.open();
    output.contentWindow.document.close();

    output.contentWindow.document.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
}
