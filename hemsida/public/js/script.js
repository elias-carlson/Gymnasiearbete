document.querySelector(".menubtn").onclick = function() {
    document.querySelector(".sidenav").style.width = "calc(100vw - 60px)";
}

document.querySelector("main", "header", "footer").onclick = function() {
    document.querySelector(".sidenav").style.width = "0";
}