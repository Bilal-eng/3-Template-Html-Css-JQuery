$(function () {

    'use strict';

    // Trigger Nice Scroll Plugin

    $('html').niceScroll();

    // Change Header Height

    $('.header').height($(window).height());

    // Scroll To Features

    $('.header .arrow i').click(function () {

        $('html, body').animate({

            scrollTop: $('.features').offset().top
        }, 1000);
    });
});