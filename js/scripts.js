//backend
// var thisTurn = [];
var thisTurnTotal = 0;
var player1 = 0;
var player2 = 0;
var playerTracker = 1

function rollDice() {
  var rollResult = Math.floor(Math.random() * 6 ) + 1;
  // thisTurn.push(rollResult);
  if (rollResult === 1) {
    thisTurnTotal = 0;
    endTurn();
  } else {
    thisTurnTotal += rollResult;
  }
  return rollResult
}

function endTurn () {
  if (playerTracker === 1) {
    player1 += thisTurnTotal;
    playerTracker = 2;
  } else {
    player2 += thisTurnTotal;
    playerTracker = 1;
  }
  thisTurnTotal = 0;
}

function reset() {
  thisTurnTotal = 0;
  player1 = 0;
  player2 = 0;
  playerTracker = 1
}

//frontend
$(document).ready(function(){

  $('#reset').click(function() {
    displayReset();
  });
  $("#hold").click(function(){
    endTurn();
    $("#turnscore").text(thisTurnTotal);
    $("#player1score").text(player1);
    $("#player2score").text(player2);
    if (player1 >= 100) {
      $('.winnerplayer1').show().delay(1000).fadeOut();
      displayReset();
    }
    if (player2 >= 100) {
      $('.winnerplayer2').show().delay(1000).fadeOut();
      displayReset();
    }

    $("#player1").toggleClass("well");
    $("#player2").toggleClass("well");
  });
  $("#roll").click(function(){
    rollResult = rollDice();
    $("img").show().delay(1000).fadeOut();
    $("#diceroll").text(rollResult).hide().delay(1500).fadeIn();
    $('#turnscore').text(thisTurnTotal).hide().delay(1500).fadeIn();
    if (rollResult === 1){
      $("#player1").toggleClass("well");
      $("#player2").toggleClass("well");
    }
  });
});

function displayReset(){
  reset();
  $("#diceroll").text("Roll the die");
  $("#turnscore").text(0);
  $("#player1score").text(0);
  $("#player2score").text(0);
  $("#player1").removeClass("well").addClass("well");
  $("#player2").removeClass("well");
}
