$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  }).mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
	  $('.hadouken').show().animate(
  	  {'left': '1020px'}, 
      500,
      function() {
        $(this).hide();
        $(this).css('left', '615px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
 

});

 $(document).keydown(function(event) {
    if (( event.which == 88 ) || ( event.which == 120)) {
      event.preventDefault();
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }
  });

 $(document).keyup(function(event) {
    if (( event.which == 88 ) || ( event.which == 120)) {
      event.preventDefault();
      $('.ryu-still').show();
      $('.ryu-ready').hide();
      $('.ryu-cool').hide();
    }
  });


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.3;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

 //   $('.ryu-still').hide();
 //   $('.ryu-cool').show();

//.keyup(function(){
//    $('.ryu-cool').hide()
//    $('.ryu-still').show()
//  }
//  });
//});

//function x-key () {
//  $('#ryu-cool')event.keycode= 88;
//}
