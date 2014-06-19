(function($) {
 
    var players = ["x","o"]; //array
    var endOfGame = false; //keep track of game over
    var playerTurn = 0; //keep track of whose turn 0 or 1
    var buttonArr = jQuery.makeArray(document.getElementsByTagName("button"));
    //var arr = $.makeArray(boxes);
    //var click = $(this).data('click');
    
    //create boxes
    for (var i = 0; i < 9; i++) {
        $('#my-game').append('<button></button>');
        
        $('button').each(function(i) {
            $(this).addClass('button-'+i);
        });
    };
    
    // if box is empty, set it to player 1, then switch turns
     $('button').one('click', function () {
         if (!!$('button').length) {     
             if (playerTurn === 0) {
                    $(this).append('x');
                    playerTurn = 1;
                } else {
                    $(this).append('o');
                    playerTurn = 0;
                }
             } 
     });
     
     // TODO check for winners
         function checkWinner() {
        
        // check rows
        if (buttonArr[0] == players[playerTurn] && buttonArr[1] == players[playerTurn] && buttonArr[2] == players[playerTurn]) {
            return true;
        };
        if (buttonArr[3] == players[playerTurn] && buttonArr[4] == players[playerTurn] && buttonArr[5] == players[playerTurn]) {
            return true;
        };
        if (buttonArr[6] == players[playerTurn] && buttonArr[7] == players[playerTurn] && buttonArr[8] == players[playerTurn]) {
            return true;
        };
        
        // check columns
        if (buttonArr[0] == players[playerTurn] && buttonArr[4] == players[playerTurn] && buttonArr[6] == players[playerTurn]) {
            return true;
        };
        if (buttonArr[1] == players[playerTurn] && buttonArr[5] == players[playerTurn] && buttonArr[7] == players[playerTurn]) {
            return true;
        };
        if (buttonArr[2] == players[playerTurn] && buttonArr[6] == players[playerTurn] && buttonArr[8] == players[playerTurn]) {
            return true;
        };
        
        // check diagonals
        if (buttonArr[0] == players[playerTurn] && buttonArr[5] == players[playerTurn] && buttonArr[8] == players[playerTurn]) {
            return true;
        };
        if (buttonArr[2] == players[playerTurn] && buttonArr[5] == players[playerTurn] && buttonArr[6] == players[playerTurn]) {
            return true;
        };
    };

     // Check if game is over
     // Winner or Draw?
     // Continue playing if game is not over
    
})(jQuery);
