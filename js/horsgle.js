$(document).ready(function(){
    $('.parallax').parallax();
    $('.carousel').carousel('next', 3);
    $('.carousel').carousel('set', 4);
    $('.tap-target').tapTarget('open');
    $('.tap-target').tapTarget('close');
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      duration: 2000
    });

});
