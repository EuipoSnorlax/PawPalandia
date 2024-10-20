function perros(){
    document.getElementById("perros").style.display = "block";
    document.getElementById("gatos").style.display = "none";

    document.getElementById("perrosButton").classList.add("active");
    document.getElementById("gatosButton").classList.remove("active");
}

function gatos(){
    document.getElementById("gatos").style.display = "block";
    document.getElementById("perros").style.display = "none";

    document.getElementById("gatosButton").classList.add("active");
    document.getElementById("perrosButton").classList.remove("active");
}

