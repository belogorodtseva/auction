

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
  $('.sbutton').click(function() {
      var bla = $('#search').val();
      if (bla) {
        window.location.href = "/search/"+bla;
      }
  })
	$('#search').keydown(function(event){
	    var keyCode = (event.keyCode ? event.keyCode : event.which);
	    if (keyCode == 13) {
				var bla = $('#search').val();
				if (bla) {
					window.location.href = "/search/"+bla;
				}
	    }
	});
});
