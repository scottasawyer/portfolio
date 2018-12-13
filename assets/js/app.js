$(function () {

    $(document).scroll(function () {
        if ($(window).scrollTop() >= $('header').offset().top) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    $('.navbar-nav a, #scroll-down').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

});

$(document).ready(function () {
    $("a.scrollLink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
});

const chevron = document.querySelector('i');

function animateChevron(scale, duration, elasticity) {
    anime.remove(chevron);
    anime({
        targets: chevron,
        scale: scale,
        duration: duration,
        elasticity: elasticity
    });
}

function enterButton() {
    animateChevron(1.2, 800, 400)
};

function leaveButton() {
    animateChevron(1.0, 600, 300)
};

chevron.addEventListener('mouseenter', enterButton, false);
chevron.addEventListener('mouseleave', leaveButton, false);