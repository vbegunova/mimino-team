const inistSlider = () => {
    const $slider = $('.carousel-section');

    $slider.owlCarousel({
        center: true,
        items: 2,
        loop: false,
        nav: true,
        dots: false,
        margin: 24,
        responsiveClass: true,
        responsive: {
            0: {
                items:1,
                nav:true
            },
            1024: {
                items: 2,
            }
        }
    });
};

$(document).ready(function () {
    inistSlider();
});