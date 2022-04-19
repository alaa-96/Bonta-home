$('.hamburger').click(function () {
  $('.navbar-nav').addClass('active');
  $('.hamburger').hide();
  $('.close').show();
});

$('.close').click(function () {
  $('.navbar-nav').removeClass('active');
  $('.close').hide();
  $('.hamburger').show();
});
