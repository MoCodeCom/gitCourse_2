var page1 = document.getElementById("page1_content");
var page2 = document.getElementById("page2_content");
var home = document.getElementById("main_content");

function home_pg(){
    home.style.display = "unset";
    page1.style.display = "none";
    page2.style.display = "none";
}

function page1_pg(){
    home.style.display = "none";
    page1.style.display = "unset";
    page2.style.display = "none";
}

function page2_pg(){
    home.style.display = "none";
    page1.style.display = "none";
    page2.style.display = "unset";
}
