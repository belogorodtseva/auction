
$(document).ready(function() {
  $('.small-block .smallimg:first').addClass('active');
  var bg = $('div.smallimg.active').css("background-image");
  $('div.bigimg').css('background-image', bg);

  $('.smallimg').click(function() {
      var bg = $(this).css("background-image")
      $('div.smallimg.active').removeClass('active');
      $(this).addClass('active');
      $('div.bigimg').css('background-image', bg);
  })
});
