$('.hamburger').click(function () {
  $('.navbar-nav').addClass('active');
  $('.hamburger').hide();
  $('.close').show();
  $('body').addClass('fixed-position');
});

$('.close').click(function () {
  $('.navbar-nav').removeClass('active');
  $('.close').hide();
  $('.hamburger').show();
  $('body').removeClass('fixed-position');
});

// $('body').click(function () {
//   $('body').removeClass('fixed-position');
// });
