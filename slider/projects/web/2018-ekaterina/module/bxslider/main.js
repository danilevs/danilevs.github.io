
$(document).ready(function(){

    var slider = $('#bxslider').bxSlider({
        auto: true,
        autoStart: true,
        slideWidth: 1200,
        pause: 10000
    });

    $('.bxslider-arrow-next').click(function(){
        slider.goToNextSlide();
        return false;
    });

    $('.bxslider-arrow-prew').click(function(){
        slider.goToPrevSlide();
        return false;
    });

});

// https://bxslider.com/options/
