const inistSlider = () => {
    const $slider = $('.carousel-section');
    $slider.owlCarousel({
        center: true,
        items: 2,
        loop: false,
        nav: true,
        margin: 24,
        responsiveClass:true,
        responsive:{
        0:{
            items:2,
            nav:true
        },
        1024:{
            items:3,
            nav:false
        },
        1280:{
            items:3,
            nav:true,
            loop:false
        }
    }
    });
};

$(document).ready(function () {
    inistSlider();
});