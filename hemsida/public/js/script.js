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

    function showLoginError(){
        $(".login #loginbtn").css('display', 'none');
        $(".login form").css('display', 'flex');
        $(".loginfield").css('width', '150px');
    };
    
    function registerError(element) {
        $(element).css('border', 'red 1px solid');
    }
    
    if(top.location.pathname == "/app") {

        // $(window).on('beforeunload', function(){
        //     return 'Are you sure you want to leave?';
        // });

        $(function() {
            var i = 1;
            $(".dropMenu").children().each(function() {
                $(".options").append(`
                    <div class="opt`+i+` not_selected">
                        <div class="style">
                            <div class="bg">
                                <p>Background </p>
                                <i class="material-icons">arrow_drop_down</i>
                                <p>Color:</p>
                                <input type="color">
                                <p>Image:</p>
                                <input type="text">
                            </div>
                        </div>
                        <div class="content">

                        </div>
                    </div>`
                );
                i++;
            });

        });

        $(window).scroll(function() {
            if ($(this).scrollTop() < 100 || $(this).scrollTop() > 100 ) {
                $("#toTopBtn").fadeIn();
            } else {
                $("#toTopBtn").fadeOut();   
            }
        });
        
        $("#toTopBtn").click(function() {
            $("html").animate({scrollTop: '100px'});
        });
    
        $(".dropBtn").click(function() {
            $(".dropMenu").slideToggle();
        });
    
        $(".dropMenu").children().click(function() {
            var opt_id = $(this).attr("id");
            $("."+opt_id).toggleClass("selected");
        });
    } 
});