(function($) {
 
    var gameOver = false;
    var playerTurn = "X"; 
    var count = 0;
    
    //create boxes
    for (var i = 0; i < 9; i++) {
        $("#my-game").append("<div class='ttc button-" + i + "'></div>");
    }
  
    var boxesArr = $.makeArray($('.ttc'));

      
     $(".ttc").one('click', function () { 
        if (gameOver === false) {
          $(this).append('<p>' + playerTurn + '</p>');
          winnerCheck(boxesArr, playerTurn);
        
            if (playerTurn === "X") {
                    playerTurn = "O";
                } else {
                    playerTurn = "X";
                }
           count++;
          }
         if (count >= 9) {
             reload();
             $("#message").append("It's a TIE!");
         }
     });


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
        }
    }
    
    function reload() {
        var button = $("#reload");
         button.show();   
         button.click(function() {
             location.reload();
         });
    }

    function endOfGame() {
        reload();
         $("#message").append("Player " + playerTurn + " won!");
         gameOver = true;
    }
    
})(jQuery);
