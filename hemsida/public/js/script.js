$(document).ready(function(){
    $(".menubtn").click(function(){
        $(".sidenav").css('width', 'calc(100vw - 60px)');
    });
});

$(document).ready(function(){
    $("main,footer").click(function(){
        $(".sidenav").css('width', '0');
    });
});