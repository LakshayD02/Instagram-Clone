var dark = document.getElementById("clicked");
var white = document.getElementById("white-color");
var lol = document.getElementById("white-2color");
dark.onclick = function (){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        white.style.filter = "brightness(5)";
        lol.style.filter = "brightness(5)";
    }
    else{
        white.style.filter = "none";
        lol.style.filter = "none";
    }
}
