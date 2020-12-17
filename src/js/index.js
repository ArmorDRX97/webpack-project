import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import 'owl.carousel';
import AOS from 'aos';

AOS.init({
    once: true,
    disable: 'mobile'
});

$('.btn-menu').on('click', function () {
    $('body').toggleClass('menu-open');
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});
$(document).ready(function () {

    $('a[href^="#"]').click(function() {
        var hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500);
        return false;
    });
});

if (window.innerWidth < 576) {
    $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
        $('body').toggleClass('menu-open');
    });
}


$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    if (scrollDistance >= 450) {
        $('.navbar').addClass("menu-shadow");
    } else {
        $('.navbar').removeClass("menu-shadow");
    }
    $('section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.nav-item.active').removeClass('active');
            $('.nav-item').eq(i).addClass('active');
        }
    });
}).scroll();


