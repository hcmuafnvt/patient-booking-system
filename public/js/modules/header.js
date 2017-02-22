'use strict';

function toggleMenu() {
    $('.toggle-menu').on('click', function(e) {
        e.preventDefault();

        $('.wrapper').toggleClass('mobile-menu');
    })
}

function init() {
    $('header').css('min-height', $(window).height());
    //$('body').css('background-size', '150%');
    $('#main').show();
    toggleMenu();
}

module.exports = {
    init: init 
}