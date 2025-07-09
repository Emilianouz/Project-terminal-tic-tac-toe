/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/
function validateMove(move, board) {
    if(!move.every(el=>typeof el==="number")) { console.log("Not a number"); return false;};
       
     if(move.length<2 || move.length>2 ) {console.log("The array must have 2 numbers");return false};
        
    for(let i=0;i<move.length-1;i++){
        if(move[i+1]===move[i]+1) {console.log("The numbers ca't be sequencial");return false};
            
        if(move[i+1]===move[i]-1) {console.log("The numbers ca't be sequencial");return false};
}
    for(let i=0;i<move.length;i++){
        const value=move[i]
        if(Math.abs(value)!==value){console.log("The numbers ca't be negative");return false};
    }

    return true       
}
console.log(validateMove([1,"n"]))
console.log(validateMove([1, 2]));
console.log(validateMove([1, 3,7]));
console.log(validateMove([1, -9]));
console.log(validateMove([1, 5]));
/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
function makeMove(board, move, player) {
    return false;
}



module.exports = validateMove;

