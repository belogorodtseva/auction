
$(document).ready(function() {
  $('.small-block .smallimg:first').addClass('active');
  var bg = $('div.smallimg.active').css("background-image");
  $('div.bigimg').css('background-image', bg);

  $('.smallimg').click(function() {
      var bg = $(this).css("background-image")
      $('div.smallimg.active').removeClass('active');
      $(this).addClass('active');
      $('div.bigimg').css('background-image', bg);
  });

  $("input[name='startprice']").attr("onkeypress", "check(event)");
  $("input[name='startprice']").attr("placeholder", "Your price ...");
});


function check(event){
  var x = event.charCode;
  if (x <= 57 && x >= 48 ) {
  }
  else {
    event.preventDefault();
  }
}
