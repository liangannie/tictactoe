(function($) {
 
    var gameOver = false;
    var playerTurn = "X"; 
    
    //create boxes
    for (var i = 0; i < 9; i++) {
        $("#my-game").append("<div class='ttc button-" + i + "'></div>");
    }
  
var boxesArr = $.makeArray($('.ttc'));
  
if (gameOver === false) {
      $(".ttc").one('click', function () { 
        
          $(this).append('<p>' + playerTurn + '</p>');
          winnerCheck(boxesArr, playerTurn);
        
            if (playerTurn === "X") {
                    playerTurn = "O";
                } else {
                    playerTurn = "X";
                }
     });
} else {
  alert("test!!!");
}
  
    function winnerCheck(boxesArr, playerTurn) {
        if (($(boxesArr[0]).text() == playerTurn && $(boxesArr[1]).text() == playerTurn && $(boxesArr[2]).text() == playerTurn) ||
            ($(boxesArr[3]).text() == playerTurn && $(boxesArr[4]).text() == playerTurn && $(boxesArr[5]).text() == playerTurn) ||
            ($(boxesArr[6]).text() == playerTurn && $(boxesArr[7]).text() == playerTurn && $(boxesArr[8]).text() == playerTurn) ||
            ($(boxesArr[0]).text() == playerTurn && $(boxesArr[3]).text() == playerTurn && $(boxesArr[6]).text() == playerTurn) ||
            ($(boxesArr[1]).text() == playerTurn && $(boxesArr[4]).text() == playerTurn && $(boxesArr[7]).text() == playerTurn) ||
            ($(boxesArr[2]).text() == playerTurn && $(boxesArr[5]).text() == playerTurn && $(boxesArr[8]).text() == playerTurn) ||
            ($(boxesArr[0]).text() == playerTurn && $(boxesArr[4]).text() == playerTurn && $(boxesArr[8]).text() == playerTurn) ||
            ($(boxesArr[2]).text() == playerTurn && $(boxesArr[4]).text() == playerTurn && $(boxesArr[6]).text() == playerTurn) ){
            endOfGame();
          return;
        }
    }

    function endOfGame() {
         var button = $("#reload");
         $("#message").append("Player " + playerTurn + " won!");
         gameOver = true;
         
         button.show();   
         button.click(function() {
             location.reload();
         });
    }
    
})(jQuery);
