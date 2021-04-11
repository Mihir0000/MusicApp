$(document).ready(function () {
    $(".side-btn").click(function () {
        $(".side-nav-links").slideToggle(1700);
        $(".side-btn").toggleClass("change");
    });

    // nav btn
    $(".nav-btn").click(function () {
        $(".side-nav").toggleClass("margin");
        $(".nav-btn").toggleClass("change");
        $("main").toggleClass("max-width");
    });

    // owl
    $(".songs-center").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
});
