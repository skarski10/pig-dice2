//backend
var thisTurnTotal = 0;
var player1 = 0;
var player2 = 0;
var playerTracker = 1
var computer = false

function rollDice() {
  var rollResult = Math.floor(Math.random() * 6 ) + 1;//1
  if (rollResult === 1) {
    thisTurnTotal = 0; //total =0
    endTurn(); //player =1//player2 = this turn total
  } else {
    thisTurnTotal += rollResult;
  }
  return rollResult
}

function endTurn () {
  if (playerTracker === 1) {
    player1 += thisTurnTotal;
    playerTracker = 2;
    if (computer){
      computerRun();
    }
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

function computerRun(){
thisTurnTotal = 0;
result1 = rollDice();//1
result2 = rollDice();
  if (result2 ===1){
    endTurn();
  }else{
  displayTurnResults();
  }
}

//frontend

$(document).ready(function(){

  $("#AIPlayer").click(function(){
    computer = true;
  });

  $("#hold").click(function(){
    if(computer){
      endTurn();
      $("#turnscore").text(thisTurnTotal);
      $("#player1score").text(player1);
      $("#player2score").text(player2);
      if (player1 >= 100) {
        $('.winnerplayer1').show().delay(1000).fadeOut();
        displayReset();
      } else if (player2 >= 100) {
        $('.winnerplayer2').show().delay(1000).fadeOut();
        displayReset();
      }
    }else{
    displayTurnResults();
    }
  });

  $('#reset').click(function() {
    displayReset();
  });

  $("#roll").click(function(){
    rollResult = rollDice();
    rollDiceAnimation(rollResult, 1500);
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
  $("#player1").addClass("well");
  $("#player2").removeClass("well");
}

function displayTurnResults(){
  endTurn();
  $("#turnscore").text(thisTurnTotal);
  $("#player1score").text(player1);
  $("#player2score").text(player2);
  if (player1 >= 100) {
    $('.winnerplayer1').show().delay(1000).fadeOut();
    displayReset();
  } else if (player2 >= 100) {
    $('.winnerplayer2').show().delay(1000).fadeOut();
    displayReset();
  } else {
    $("#player1").toggleClass("well");
    $("#player2").toggleClass("well");
  }
}

function rollDiceAnimation(rollResult, time){
  //$("img").show().delay(1000).fadeOut();
  $("#diceroll").text(rollResult).hide().delay(time).fadeIn();
  $('#turnscore').text(thisTurnTotal).hide().delay(time).fadeIn();
}
