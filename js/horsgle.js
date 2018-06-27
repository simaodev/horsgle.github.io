$(document).ready(function(){
    $('.parallax').parallax();
    // $('.carousel').carousel('next', 3);
    // $('.carousel').carousel('set', 4);
    $('.tap-target').tapTarget('open');
    $('.tap-target').tapTarget('close');
    // $('.carousel.carousel-slider').carousel({
    //   fullWidth: true,
    //   duration: 2000
    // });
    // $('.carousel').carousel(
    //   {
    //     dist: 0,
    //     padding: 0,
    //     fullWidth: true,
    //     indicators: true,
    //     duration: 100,
    //   }
    // );
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop:true,
      autoplay:true,
      smartSpeed: 1000,
      autoplayTimeout:4000,
      autoWidth:true
    });

    $(".button-collapse").sideNav();
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
    });
    $('#phone_with_ddd').mask('(00)0 0000-0000');
});
// autoplay()
// function autoplay() {
//     $('.carousel').carousel('next');
//     setTimeout(autoplay, 4500);
// }
