function contact(){
    var select = document.getElementById("info")
    document.getElementById("methodlabel").innerHTML = "Enter your " + select.options[select.selectedIndex].value;
    document.getElementById("method").style.display = "block";
}