$(function(){
    $(".menubtn").click(function(){
        $(".sidenav").animate({width: '300px'}, 500);        
    });

    $("main,footer").click(function(){
        $(".sidenav").animate({width: '0'}, 500);
    });

    $(".login p").click(function(){
        $(".login p").css('display', 'none');
        $(".login form").css('display', 'flex');
        $(".loginfield").animate({width: '150px'}, 500);
    });
});