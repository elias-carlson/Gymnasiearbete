$(function(){
    $(".menubtn").click(function(){
        $(".sidenav").animate({width: '300px'}, 500);
    });

    $("main,footer").click(function(){
        $(".sidenav").animate({width: '0'}, 500);
    });

    $(".login p").click(function(){
        $(".login #loginbtn").css('display', 'none');
        $(".login form").css('display', 'flex');
        $(".loginfield").animate({width: '150px'}, 500);
    });
});

function showLoginError(){
    $(".login #loginbtn").css('display', 'none');
    $(".login form").css('display', 'flex');
    $(".loginfield").css('width', '150px');
};

function registerError(element) {
    $(element).css('border', 'red 1px solid');
}

$(window).scroll(function() {
    if ($(this).scrollTop() < 100 || $(this).scrollTop() > 100 ) {
        $("#toTopBtn").fadeIn();
    } else {
        $("#toTopBtn").fadeOut();   
    }
});

// When the user clicks on the button, scroll to the top of the document
$("#toTopBtn").click(function() {
    $(window).scrollTop(100);
});