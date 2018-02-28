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
            $(".dmOptions").append(`
                <div class="dmOpt`+ i + `">
                    <hr>
                    <div class="style">
                        <div class="opt1">
                            <p>Background</p>
                            <div class="optSettings">
                                <div class="stg1">
                                    <p>Color:</p>
                                    <input class="color_picker" type="color">
                                </div>
                                <div class="stg2">
                                    <p>Image:</p>
                                    <input type="text">
                                </div>
                                <button>Apply</button>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="content"></div>
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

        //!
        $(".dmOptions").children().hide();
        $(".dmMenu").children().hide();
        $(".bgOptions").children().hide();
        $(".bgMenu").children().hide();
        $(".dmOptions").find(".test").show();

        $(".dmBtn").click(function () {
            $(".dmMenu").children().slideToggle();
        });
        var opt_id, opt_id_suffix, activeArea, activeOpt, activeStg
        $(".dmMenu").children().click(function () {
            opt_id = $(this).attr("id");
            opt_id_suffix = opt_id.substring(5, 6);
            if (!$(this).hasClass("selected")) {
                activeArea = $(this).html().toLowerCase();
                activeArea = activeArea.replace(/ /g, '_');
                $(".dmMenu").find(".selected").toggleClass("selected");
                $(this).toggleClass("selected");
                $(".dmOptions").children().hide();
                $(".dmOptions").find("." + opt_id).show();
                $(".dmBtn").html(`Area: ` + $(this).html() + `<i class="material-icons"> arrow_drop_down</i>`);
                $(".dmMenu").children().slideToggle();
            } else {
                activeArea = "";
                $(".dmBtn").html(`Select area <i class="material-icons"> arrow_drop_down</i>`);
                $(this).toggleClass("selected");
                $(".dmOptions").children().hide();
                $(".dmMenu").children().slideToggle();
            };
        });

        $(".optSettings").find("button").click(function () {
            activeOpt = $(this).parent().parent().find("p").html().toLowerCase();
            $('iframe').contents().find(activeArea).css(activeOpt, $(".dmOpt" + opt_id_suffix).find(".stg1").find("input").val());
            if ($(".dmOpt" + opt_id_suffix).find(".stg2").find("input").val() != "") {
                $('iframe').contents().find(activeArea).css(activeOpt, `url("` + $(".dmOpt" + opt_id_suffix).find(".stg2").find("input").val() + `") no-repeat center`);
                $('iframe').contents().find('header').css("background-size", "cover");
            };
        });

        // $(".image").find("button").click(function () {
        //     $('iframe').contents().find('header').css("background", `url("` + $(".image").find("input").val() + `") no-repeat center`);
            // $('iframe').contents().find('header').css("background-size", "cover");
        // });

        // //February Try
        // $(".dmOptions>>>>").click(function () {
        //     // if ($(e.target).attr("class") != undefined && $(e.target).attr("class") != "material-icons") {
        //     //     alert($(e.target).attr("class") + " | " + $(e.target).attr("id"));
        //     // } else {
        //     //     e.target = $(e.target).parent();
        //     //     alert($(e.target).attr("class") + " | " + $(e.target).attr("id"));
        //     // };
        //     if ($(this).attr("class").includes("Btn")) {
        //         $(".bgMenu").children().slideToggle();
        //     };
        //     $(".bgMenu").children().click(function () {
        //         var bg_id = $(this).attr("id");
        //         var bg_id_suffix = bg_id.substring(2, 6);
        //         if (!$(this).hasClass("selected")) {
        //             $(".bgMenu").find(".selected").toggleClass("selected");
        //             $(this).toggleClass("selected");
        //             $(".bgOptions").children().hide();
        //             $(".bgOptions").find("." + bg_id).show();
        //             $(".bgBtn").html(`Background: ` + $(this).html() + `<i class="material-icons"> arrow_drop_down</i>`);
        //             $(".bgMenu").children().slideToggle();
        //         } else {
        //             $(".bgBtn").html($(this>p).attr(id));
        //             $(this).toggleClass("selected");
        //             $(".bgOptions").children().hide();
        //             $(".bgMenu").children().slideToggle();
        //         };
        //     });
        // });

        // //January Try
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

    };
});