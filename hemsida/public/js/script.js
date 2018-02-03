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
        $(".dmMenu").children().each(function () {
            $(".dm_options").append(`
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

        $("#toTopBtn").click(function (e) {
            $("html").animate({ scrollTop: '100px' });
        });
        
        // $(".dm_options").children().hide();
        // $(".dm_options").find(".test").show();
        // $(".control_panel").click(function(e) {
        //     alert($(e.target).attr("class") + " | " + $(e.target).attr("id"));

        //     if ($(e.target).attr("class").includes("Btn")) {
        //         var target_class_prefix = $(e.target).attr("class").substring(0,2);
        //         $("." + target_class_prefix + "Menu").slideToggle();
        //     } else if($(e.target).attr("class").includes("Menu")) {
        //         var target_id = $(e.target).attr("id");
        //         var target_id_prefix = target_id.substring(0,2);
        //         if (!$(e.target).hasClass("selected")) {
        //             $("." + target_id_prefix + "Menu").find(".selected").toggleClass("selected");
        //             $(e.target).toggleClass("selected");
        //             $("." + target_id_prefix + "_options").children().hide();
        //             $("." + target_id_prefix + "_options").find("." + target_id).show();
        //             if (target_id_prefix == "dm") {
        //                 $("." + target_id_prefix + "Btn:first-child").html(`Area: ` + $(e.target).html() + `<i class="material-icons"> arrow_drop_down</i>`);
        //             } else {
        //                 $("." + target_id_prefix + "Btn:first-child").html($("." + target_id_prefix + "Btn:first-child").html() + `: ` + $(e.target).html() + `<i class="material-icons"> arrow_drop_down</i>`);
        //             }
        //             $("." + target_id_prefix + "Menu").slideToggle();
        //         } else {
        //             if (target_id_prefix == "dm") {
        //                 $("." + target_id_prefix + "Btn:first-child").html(`Select area <i class="material-icons"> arrow_drop_down</i>`);
        //             } else {
        //                 $("." + target_id_prefix + "Btn:first-child").html($("." + target_id_prefix + "Btn:first-child").attr("id") + `: ` + $(e.target).html() + `<i class="material-icons"> arrow_drop_down</i>`);
        //             }
        //             $(e.target).toggleClass("selected");
        //             $("." + target_id_prefix + "_options").children().hide();
        //             $("." + target_id_prefix + "Menu").slideToggle();
        //         };
        //     };
        //     // } else if($(e.target).attr("class").includes("Opt")) {

        //     // };
        // });

        // must be deleted in the final form
        // $(".dmMenu").children().click(function () {
        //     var opt_id = $(this).attr("id");
        //     var opt_id_prefix = opt_id.substring(0,2);
        //     var opt_id_suffix = opt_id.substring(2,6);
        //     if (!$(this).hasClass("selected")) {
        //         $(".dmMenu").find(".selected").toggleClass("selected");
        //         $(this).toggleClass("selected");
        //         $(".dm_options").children().hide();
        //         $(".dm_options").find("." + opt_id).show();
        //         $(".dmBtn").html(`Area: ` + $(this).html() + `<i class="material-icons"> arrow_drop_down</i>`);
        //         $(".dmMenu").slideToggle();
        //     } else {
        //         $(".dmBtn").html(`Select area <i class="material-icons"> arrow_drop_down</i>`);
        //         $(this).toggleClass("selected");
        //         $(".dm_options").children().hide();
        //         $(".dmMenu").slideToggle();
        //     };
        // });
        
        $(".color").find("button").click(function() {
            $('iframe').contents().find('header').css("background", $(".color").find("input").val());
        });
        
        $(".image").find("button").click(function() {
            $('iframe').contents().find('header').css("background", `url("` + $(".image").find("input").val() + `") no-repeat center`);
            $('iframe').contents().find('header').css("background-size", "cover");
        });

    };
});