let $btnMenu = $('.j-btn-menu');
let $menu = $('.j-menu');
$btnMenu.on('click', function (e) {
    e.preventDefault();
    $menu.stop(true).slideToggle().toggleClass('open');
})

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

let $stepsSlide = $(".j-steps-slider");
if ($stepsSlide.length) {
    $stepsSlide.slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4000
    });
}

let $portfolioSlider = $(".j-portfolio-slider");
if ($portfolioSlider.length) {

    $(window).resize(function(e){
        if (window.innerWidth <= 768) {
            if(!$portfolioSlider.hasClass('slick-initialized')){
                mobileOnlySlider();
            }
        } else{
            if($portfolioSlider.hasClass('slick-initialized')){
                $portfolioSlider.slick('unslick');
            }
        }
    });

    function mobileOnlySlider () {
        $portfolioSlider.slick({
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            dots: false,
            rows: 3,
        });
    }
}

$('a[href^="#"]').on('click', function (e) {
    let id = $(this).attr('href');
    if (id !== "#" && $(id).length) {
        e.preventDefault();
        if ($(window).width() <= 1024 && $menu.length && $menu.is('.open')) {
            $menu.slideUp();
        }
        $('html, body').stop(true).animate({
            scrollTop: $(id).offset().top
        }, 800);
    }
});
