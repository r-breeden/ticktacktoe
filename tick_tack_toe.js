var prompt = require('prompt');

var check4Winner = (board) => {

};

var getMoveFromUser = (move) => {
  console.log('Pick a number 1 - 9')
  prompt.get('number', function (err, result) {
    if ( result.number > 0 && result.number < 9 ) {
      return result.move;
    } else {
      getMoveFromUser();
    }
  });
}

var takeTurn = (board, player) => {
  //print board
  printBoard(board);
  //let user input move (1 - 9)
  let move = getMoveFromUser();
    //update board
  //check4Winner

  //change whose turn it is
  (player === playerOne) ? player = playerTwo : player = playerOne;
  //taketurn(board, player);
}

var printBoard = (board) => {
  console.log(board[0][0], board[0][1], board[0][2]);
  console.log(board[1][0], board[1][1], board[1][2]);
  console.log(board[2][0], board[2][1], board[2][2]);
};

var startGame = () => {
  let board = [[0,0,0],[0,0,0],[0,0,0]];
  takeTurn(board, playerOne);
};

var playerOne, playerTwo;
prompt.get(['playerOne', 'playerTwo'], function (err, result) {
    playerOne = result.playerOne;
    playerTwo = result.playerTwo;
    console.log('  Player One: ' + playerOne);
    console.log('  Player Two: ' + playerTwo);
    startGame();
  });

