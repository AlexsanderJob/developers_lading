let $btnAccordion = $('.j-service-accordion');

$btnAccordion.on('click', function () {
    let parent = $(this).parent();
    let content = $(this).next();
    if ($(parent).is('.active')) {
        $(parent).removeClass('active');
        $(content).slideUp();
    } else {
        $(parent).addClass('active');
        $(content).slideDown();
    }
});

let $aboutUsSlide = $(".steps-slider");
if ($aboutUsSlide.length) {
    $aboutUsSlide.slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: 0
        // responsive: [
        //     {
        //         breakpoint: 5000,
        //         settings: "unslick"
        //     },
        //     {
        //         breakpoint: 769,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             settings: "init"
        //         }
        //     }
        // ]
    });
}
