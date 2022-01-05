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
    // Mobile menu
    // $("#main-header .menu-toggle").click(function () {
    //     $(".mobile-menu").toggleClass("active");
    // });

    // $(".mobile-menu").click(function (event) {
    //     if ($(event.target).is(this)) {
    //         $(this).removeClass("active")
    //     }
    // });

    $('.menu-list a, .banner-text a').click(function (e) {
        e.preventDefault();
        let fixedHeight = $('#header').outerHeight();
        let id = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(id).offset().top - fixedHeight + 1 }, 0);
        $(this).addClass('active');
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

    // Home banner swiper
    const swiper = new Swiper(".homeBannerSwiper", {
        lazy: true,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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