$(window).on('load', function () {
    // Preloader
    $('.preloader img').fadeOut();
    $('.preloader').delay(400).fadeOut();

    // Scroll top button
    $offset = $("#header").outerHeight();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200)
            $('#btn-scroll-top').fadeIn(200);
        else
            $('#btn-scroll-top').fadeOut(200);

        if ($(this).scrollTop() > $offset + 200) {
            $("#header").addClass("fixed");
            $('body').css("padding-top", $offset + "px");
        }
        else {
            $("#header").removeClass("fixed");
            $('body').css("padding-top", "0");
        }
    });

});

$(function () {
    $('.menu-list a, #home-banner a').click(function () {
        let fixedHeight = $('#header').outerHeight();
        let id = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(id).offset().top - fixedHeight + 1 }, 0);
    });

    // Mobile menu
    $("#header .menu-toggle, .mobile-menu a").click(function () {
        $(".mobile-menu").toggleClass("active");
    });

    $(".mobile-menu").click(function (event) {
        console.log($(event.target));
        if ($(event.target).is(this)) {
            $(this).removeClass("active")
        }
    });

    // Scroll top button
    $('#btn-scroll-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 0);
    });

    // Lang list
    $('.lang-list button').click(function () {
        $(this).stop(true, false, true).toggleClass('active');
        $('.lang-dropdown').stop(true, false, true).toggleClass('active');
    });

    // Tab content
    $('#signalsTab button[data-bs-toggle="tab"]').on('show.bs.tab', function (e) {
        let target = $(e.target).data('bs-target');
        console.log(target)
        $(target).addClass('show active').siblings('.tab-pane.active').removeClass('show active');
    });

    // Home banner swiper
    const swiper = new Swiper(".homeBannerSwiper", {
        lazy: true,
        spaceBetween: 50,
        autoplay: {
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });
    // Blogs slider
    const blogsSwiper = new Swiper(".blogsSwiper", {
        lazy: true,
        loop: false,
        spaceBetween: 30,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });
})