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
}

//frontend
$(document).ready(function(){
  $("#hold").click(function(){

  })
  $("#roll").click(function(){
    $("#diceroll").text(rollDice());
    $('#turnscore').text(thisTurnTotal);
  })
})
