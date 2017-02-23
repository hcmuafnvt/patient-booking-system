'use strict';

function toggleMenu() {
    $('.toggle-menu').on('click', function(e) {
        e.preventDefault();

        $('.wrapper').toggleClass('mobile-menu');
    })
}

function handleScrolling() {
    $(window).on('scroll', function(e) {
        console.log('scrolling');
    })
}

function init() {
    handleScrolling();
    $('.search-wrapper').css('min-height', $(window).height());
    //$('body').css('background-size', '150%');
    //$('#main').show();
    toggleMenu();
}

module.exports = {
    init: init 
}