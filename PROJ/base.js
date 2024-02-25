function run(){
    let htmlcode=document.getElementById("html").value;
    let output=document.getElementById("output");

    output.contentDocument.body.innerHTML=htmlcode;
}