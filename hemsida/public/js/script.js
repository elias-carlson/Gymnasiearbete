$(function () {
    $(".menubtn").click(function () {
        $(".sidenav").animate({ width: '300px' }, 500);
    });

    $("main,footer").click(function () {
        $(".sidenav").animate({ width: '0' }, 500);
    });

    $(".login p").click(function () {
        $(".login #loginbtn").css('display', 'none');
        $(".login form").css('display', 'flex');
        $(".loginfield").animate({ width: '150px' }, 500);
    });

    function showLoginError() {
        $(".login #loginbtn").css('display', 'none');
        $(".login form").css('display', 'flex');
        $(".loginfield").css('width', '150px');
    };

    function registerError(element) {
        $(element).css('border', 'red 1px solid');
    }

    if (top.location.pathname == "/app") {

        // $(window).on('beforeunload', function(){
        //     return 'Are you sure you want to leave?';
        // });

        var i = 1;
        $(".dropMenu").children().each(function () {
            $(".options").append(`
                    <div class="dmOpt`+ i + `">
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

        $(window).scroll(function () {
            if ($(this).scrollTop() < 100 || $(this).scrollTop() > 100) {
                $("#toTopBtn").fadeIn();
            } else {
                $("#toTopBtn").fadeOut();
            }
        });

        $("#toTopBtn").click(function () {
            $("html").animate({ scrollTop: '100px' });
        });

        $(".dropBtn").click(function () {
            $(".dropMenu").slideToggle();
        });

        $(".options").children().hide();
        // must be deleted in the final form
        $(".options").find(".test").show();
        $(".dropMenu").children().click(function () {
            var opt_id = $(this).attr("id");
            var opt_id_prefix = opt_id.substring(0,2);
            var opt_id_suffix = opt_id.substring(2,6);
            if (!$(this).hasClass("selected")) {
                $(".dropMenu").find(".selected").toggleClass("selected");
                $(this).toggleClass("selected");
                $(".options").children().hide();
                $(".options").find("." + opt_id).show();
                $(".dropBtn").html(`Area: ` + $(this).html() + `<i class="material-icons"> arrow_drop_down</i>`);
                $(".dropMenu").slideToggle();
            } else {
                $(".dropBtn").html(`Select area <i class="material-icons"> arrow_drop_down</i>`);
                $(this).toggleClass("selected");
                $(".options").children().hide();
                $(".dropMenu").slideToggle();
            };

        });
        
        $(".color").find("button").click(function() {
            $('iframe').contents().find('header').css("background", $(".color").find("input").val());
        });
        
        $(".image").find("button").click(function() {
            $('iframe').contents().find('header').css("background", `url("` + $(".image").find("input").val() + `") no-repeat center`);
            $('iframe').contents().find('header').css("background-size", "cover");
        });

    };
});