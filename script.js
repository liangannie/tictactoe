(function($) {
 
    var gameOver = false;
    var playerTurn = "X"; 
    var boxesArr= null;
    var boxes = $(".ttc");

    
    //create boxes
    for (var i = 0; i < 9; i++) {
        $("#my-game").append("<div class='ttc'></div>");
        
        $(".ttc").each(function(i) {
            $(this).addClass('button-'+i);
        });
    };
    
    //creates array after boxes are created
    var boxesArr = jQuery.makeArray($('.ttc')); 
    
    // if box is empty, set it to player 1, then switch turns
    $(".ttc").one('click', function () {
        
        $(this).append('<p>' + playerTurn + '</p>');      
        winnerCheck(boxesArr, playerTurn);
        
            if (playerTurn === "X") {
                    playerTurn = "O";
                } else {
                    playerTurn = "X";
                }
     });
    
    function winnerCheck(boxesArr, playerTurn) {
        if ( ($(boxesArr[0]).text() == playerTurn && $(boxesArr[1]).text() == playerTurn && $(boxesArr[2]).text() == playerTurn) ||
            ($(boxesArr[3]).text() == playerTurn && $(boxesArr[4]).text() == playerTurn && $(boxesArr[5]).text() == playerTurn) ||
            ($(boxesArr[6]).text() == playerTurn && $(boxesArr[7]).text() == playerTurn && $(boxesArr[8]).text() == playerTurn) ||
            ($(boxesArr[0]).text() == playerTurn && $(boxesArr[3]).text() == playerTurn && $(boxesArr[6]).text() == playerTurn) ||
            ($(boxesArr[1]).text() == playerTurn && $(boxesArr[4]).text() == playerTurn && $(boxesArr[7]).text() == playerTurn) ||
            ($(boxesArr[2]).text() == playerTurn && $(boxesArr[5]).text() == playerTurn && $(boxesArr[8]).text() == playerTurn) ||
            ($(boxesArr[0]).text() == playerTurn && $(boxesArr[4]).text() == playerTurn && $(boxesArr[8]).text() == playerTurn) ||
            ($(boxesArr[2]).text() == playerTurn && $(boxesArr[4]).text() == playerTurn && $(boxesArr[6]).text() == playerTurn) ){
            endOfGame();
        };    
    };

        function endOfGame() {
         var button = $("#reload");
         $("#message").append("Player " + playerTurn + " won!");
         button.show();
         button.click(function() {
             location.reload();
         });
    };
    
})(jQuery);
