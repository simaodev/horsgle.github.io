$(document).ready(function(){
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
  });
  $('#phone_with_ddd').mask('(00)0 0000-0000');
});
