$(document).ready(function() {
    let modalShown = false;

    $(window).scroll(function() {
        if (!modalShown) {
            $("#modal").fadeIn();
            modalShown = true;
        }
    });

    
    $(window).click(function(event) {
        if ($(event.target).is("#modal")) {
            $("#modal").fadeOut();
        }
    });

    $(".cpf").hover(
        function() {
            $("#main-title").text("My Work is user focused");
        },
        function() {
            $("#main-title").text("My Work");
        }
    );

    $(".nasa").hover(
        function() {
            $("#main-title").text("My Work is creatively designed");
        },
        function() {
            $("#main-title").text("My Work");
        }
    );

    $(".makerspace").hover(
        function() {
            $("#main-title").text("My Work is intuitive");
        },
        function() {
            $("#main-title").text("My Work");
        }
    );
});