(function($) {
 
    var player1 = ' ';
    var player2 = ' ';
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
    
})(jQuery);
