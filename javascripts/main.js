$(document).ready(function() {
  var startButtonClicked = false;
  $('#startButton').click(function() {
    if(startButtonClicked) {
      $('#startButton').hide();
      $('#title').hide();
      $('#gameScreenContainer').load("test.html");
    }
    else {
      $('#gameScreen').css('font-size','2em');
      $('#title').hide();
      $('#title').show().load("instruction.html").fadeIn('2000');
      $('#startButton').val('Play the Game!');
      startButtonClicked = true;
    }
  });
});