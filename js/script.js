$('.burger-button').click(() => {
    $('.burger-button').hide();
    $('.burger-button--close').show();
    $('.header__nav--mobile_container').show();
    $('.header__nav--mobile').show();
    $('.header__pages--mobile').addClass('slide-out').removeClass('slide-in');
});

$('.burger-button--close, .header__nav--mobile_container').click(() => {
    $('.header__pages--mobile').addClass('slide-in').removeClass('slide-out');
    $('.burger-button').show();
    $('.burger-button--close').hide();
    setTimeout(hideBlkBackground, 500)
    function hideBlkBackground() {
        $('.header__nav--mobile_container').hide();
    }
});

$('.header__pages--mobile').click((event) => {
    event.stopPropagation();
});

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type: 'loop',
        autoplay: 'true',
        interval: 10000
    } );
    splide.mount();
} );

$(window).scroll(function() {
    let value = window.scrollY;
    $('.hero, .banner__image, .banner__image--testimonials').css({top: value * 0.5 + 'px'});
})