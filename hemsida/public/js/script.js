// document.querySelector(".menubtn").onclick = function() {
//     document.querySelector(".sidenav").style.width = "calc(100vw - 60px)";
// }

// document.querySelector("main", "header", "footer").onclick = function() {
//     document.querySelector(".sidenav").style.width = "0";
// }

$(document).ready(function(){
    $(".menubtn").click(function(){
        $(".sidenav").style.width = "calc(100vw - 60px)";
    });
});

$(document).ready(function(){
    $(".menubtn").click(function(){
        $(".sidenav").style.width = "0";
    });
});