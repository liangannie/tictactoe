(function($) {
 
    var players = ["x","o"]; //array
    var gameOver = false; //keep track of game over
    var playerTurn = 0; //keep track of whose turn 0 or 1
    var boxesArr= null;
    
    var boxes = $(".ttc");
    //var arr = $.makeArray(boxes);
    //var click = $(this).data('click');
    
    //create boxes
    for (var i = 0; i < 9; i++) {
        $("#my-game").append("<div class='ttc'></div>");
        
        $(".ttc").each(function(i) {
            $(this).addClass('button-'+i);
        });
    };
    
    var boxesArr = jQuery.makeArray($('.ttc')); //creates array after boxes are created
    
    // if box is empty, set it to player 1, then switch turns
    $(".ttc").one('click', function () {
        
        $(this).append('<p>' + players[playerTurn] + '</p>');      
        winnerCheck(boxesArr, players, playerTurn);
        
            if (playerTurn === 0) {
                    playerTurn = 1;
                } else {
                    playerTurn = 0;
                }
     });
    
    //$(boxesArr[0]).text();
    
    function winnerCheck(boxesArr, players, playerTurn) {
        // check rows
        if ($(boxesArr[0]).text() == players[playerTurn] && $(boxesArr[1]).text() == players[playerTurn] && $(boxesArr[2]).text() == players[playerTurn]) {
            endOfGame();

        };
        if ($(boxesArr[3]).text() == players[playerTurn] && $(boxesArr[4]).text() == players[playerTurn] && $(boxesArr[5]).text() == players[playerTurn]) {
            endOfGame();
        };
        if ($(boxesArr[6]).text() == players[playerTurn] && $(boxesArr[7]).text() == players[playerTurn] && $(boxesArr[8]).text() == players[playerTurn]) {
            endOfGame();
        };
        
        // check columns
        if ($(boxesArr[0]).text() == players[playerTurn] && $(boxesArr[4]).text() == players[playerTurn] && $(boxesArr[6]).text() == players[playerTurn]) {
            endOfGame();
        };
        if ($(boxesArr[1]).text() == players[playerTurn] && $(boxesArr[5]).text() == players[playerTurn] && $(boxesArr[7]).text() == players[playerTurn]) {
            endOfGame();
        };
        if ($(boxesArr[2]).text() == players[playerTurn] && $(boxesArr[6]).text() == players[playerTurn] && $(boxesArr[8]).text() == players[playerTurn]) {
            endOfGame();
        };
        
        // check diagonals
        if ($(boxesArr[0]).text() == players[playerTurn] && $(boxesArr[4]).text() == players[playerTurn] && $(boxesArr[8]).text() == players[playerTurn]) {
            endOfGame();
        };
        if ($(boxesArr[2]).text() == players[playerTurn] && $(boxesArr[4]).text() == players[playerTurn] && $(boxesArr[6]).text() == players[playerTurn]) {
            endOfGame();
        };
    };

    function endOfGame() {
        alert("Player " + players[playerTurn] + " won!");
        location.reload();
    };
    
})(jQuery);
