$(function () {
    $(".menubtn").click(function () {
        $(".sidenav").animate({ width: '300px' }, 500);
        $(".sidenav").css('display', 'flex');
    });

    $("main,footer").click(function () {
        $(".sidenav").animate({ width: '0' }, 500);
        $(".sidenav").css('display', 'none');        
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

        var x = 1, dmOptions = [];
        $(".dmMenu").children().each(function () {
            dmOptions.push("." + $("#dmOpt"+x).html().toLowerCase());
            x++;
        });

        var i = 1;
        $(".dmMenu").children().each(function () {
            $(".dmOptions").append(`
                <div class="dmOpt`+ i + `">
                    <div class="style">
                        <h1>Style</h1>
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
                        <div class="opt2">
                            <p>Text</p>
                            <div class="optSettings">
                                <div class="stg1">
                                    <p>Color:</p>
                                    <input class="color_picker" type="color">
                                </div>
                                <button>Apply</button>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                    <h1>Content</h1>
                    </div>
                </div>`
            );
            i++;
        });

        var j = 1;
        $(".dmMenu").children().each(function () {
            if (j != 2) {
                $(`.dmOpt` + j + `  .content`).append(`
                    <div class="opt1">
                        <p>Text</p>
                        <div class="optSettings">
                        </div>
                    </div>
                `);
                var y1 = 1;
                $('iframe').contents().find(dmOptions[j-1]).find("h1, h2, h3, h4, h5, p").each(function () {
                    if ($(this)[0].tagName == "P") {
                        $(`.dmOpt` + j + `  .content .opt1 .optSettings`).append(`
                            <div class="stg` + y1 + `">
                                <p>Paragraph:</p>
                                <textarea>` + $(this).html() + `</textarea>
                            </div>
                        `);
                    } else if ($(this)[0].tagName == "H1") {
                        $(`.dmOpt` + j + `  .content .opt1 .optSettings`).append(`
                            <div class="stg` + y1 + `">
                                <p>Title:</p>
                                <textarea>` + $(this).html() + `</textarea>
                            </div>
                        `);
                    } else {
                        $(`.dmOpt` + j + `  .content .opt1 .optSettings`).append(`
                            <div class="stg` + y1 + `">
                                <p>Subtitle:</p>
                                <textarea>` + $(this).html() + `</textarea>
                            </div>
                        `);
                    };
                    y1++;
                });
                $(`.dmOpt` + j + `  .content`).append(`
                    <div class="opt2">
                        <p>Links</p>
                        <div class="optSettings">
                        </div>
                    </div>
                `);
                var y2 = 1;
                $('iframe').contents().find(dmOptions[j-1]).find("a").each(function () {
                    console.log(j);
                    $(`.dmOpt` + j + `  .content .opt2 .optSettings`).append(`<div class="stg` + y2 + `">`);
                    $(`.dmOpt` + j + `  .content .opt2 .optSettings .stg` + y2 + ``).append(`
                        <p>To:</p>
                        <textarea>` + $(this).attr("href") + `</textarea>
                    `);
                    $(`.dmOpt` + j + `  .content .opt2 .optSettings .stg` + y2 + ``).append(`
                        <p>Shows:</p>
                        <textarea>` + $(this).html() + `</textarea>
                    `);
                    y2++;
                });
            };
            j++;
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

        $(".dmOptions").children().hide();
        $(".dmMenu").children().hide();
        $(".bgOptions").children().hide();
        $(".bgMenu").children().hide();

        $(".dmBtn").click(function () {
            $(".dmMenu").children().slideToggle();
        });
        var dmOpt_id, activeArea, activeStg
        $(".dmMenu").children().click(function () {
            dmOpt_id = "." + $(this).attr("id");
            if (!$(this).hasClass("selected")) {
                activeArea = "." + $(this).html().toLowerCase();
                activeArea = activeArea.replace(/ /g, '_');
                $(".dmMenu").find(".selected").toggleClass("selected");
                $(this).toggleClass("selected");
                $(".dmOptions").children().hide();
                $(".dmOptions").find(dmOpt_id).show();
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

        var opt_id, activeOpt
        $(".optSettings").find("button").click(function () {
            opt_id = "." + $(this).parent().parent().attr("class");
            activeOpt = $(this).parent().parent().find("p").html().toLowerCase();
            if (activeOpt == "background") {
                $('iframe').contents().find(activeArea).css(activeOpt, $(dmOpt_id).find(opt_id).find(".stg1").find("input").val());
                if ($(dmOpt_id).find(opt_id).find(".stg2").find("input").val() != "") {
                    $('iframe').contents().find(activeArea).css(activeOpt, `url("` + $(dmOpt_id).find(opt_id).find(".stg2").find("input").val() + `") no-repeat center`);
                    $('iframe').contents().find(activeArea).css("background-size", "cover");
                };
            } else if (activeOpt == "text") {
                $('iframe').contents().find(activeArea).css("color", $(dmOpt_id).find(opt_id).find(".stg1").find("input").val());
                $('iframe').contents().find(activeArea).children().css("color", $(dmOpt_id).find(opt_id).find(".stg1").find("input").val());
                $('iframe').contents().find(activeArea).children().children().css("color", $(dmOpt_id).find(opt_id).find(".stg1").find("input").val());
            };
        });
    };
});