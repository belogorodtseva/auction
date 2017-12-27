

$(document).ready(function() {
  $('.open').click(function() {
      $('.menulist').addClass('active');
      $('.close').addClass('activeclose');
      $('.open').addClass('activeopen');
  })
  $('.close').click(function() {
      $('.menulist').removeClass('active');
      $('.close').removeClass('activeclose');
      $('.open').removeClass('activeopen');
  })
});
