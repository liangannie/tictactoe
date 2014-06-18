(function($) {
 
    var players = ["x","o"];
    var endOfGame = false;
    var playerTurn = 0;
    
    var boxes = $('button');
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
     function winnerCheck() {
        if ($(".button-0") == players[playerTurn] && $(".button-1") == players[playerTurn] && $(".button-2") == players[playerTurn]) {
            return true;
        };

     // Check if game is over
     // Winner or Draw?
     // Continue playing if game is not over
    
})(jQuery);
