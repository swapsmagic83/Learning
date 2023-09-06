/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

class Game{
  constructor(height,width){

    this.height=height
    this.width=width
    this.gameOver=false
    this.currPlayer=1
    this.board=[]
    
  }
}

class Player{
  constructor(color){
    this.color=color
  }
}
const pl1= document.querySelector('#pl1')
const pl2= document.querySelector('#pl2')
const button= document.querySelector('#btn')
const game = new Game(6, 7)
let gameOn=true
button.addEventListener('click',function(e){
  e.preventDefault()
  const pl1Color= pl1.value
  const pl2Color= pl2.value
  if(pl1Color!=='' && pl2Color!==''){
    if(gameOn===true){
      const gameMakeBoard = makeBoard.bind(game);
      const gameMakeHtmlBoard = makeHtmlBoard.bind(game);
      gameMakeBoard()
      gameMakeHtmlBoard()  
    }
     
  }else{
    alert(`Choose the Player Color`)
  }

gameOn=false
})

// const WIDTH = 7;
// const HEIGHT = 6;

//let currPlayer = 1; // active player: 1 or 2
 //let board = []; // array of rows, each row is array of cells  (board[y][x])
// let currPlayer=pl1
/** makeBoard: create in-JS board structure:
 *   board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {

  for (let y = 0; y < this.height; y++) {
    this.board.push(Array.from({ length: this.width }));
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  const board = document.getElementById('board');


  // make column tops (clickable area for adding a piece to that column)
  const top = document.createElement('tr');
  top.setAttribute('id', 'column-top');
  top.addEventListener('click', handleClick.bind(game));

  for (let x = 0; x < this.width; x++) {
    const headCell = document.createElement('td');
    headCell.setAttribute('id', x);
    top.append(headCell);
  }

  board.append(top);

  // make main part of board
  for (let y = 0; y < this.height; y++) {
    const row = document.createElement('tr');

    for (let x = 0; x < this.width; x++) {
      const cell = document.createElement('td');
      cell.setAttribute('id', `${y}-${x}`);
      row.append(cell);
    }

    board.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {

  for (let y = this.height - 1; y >= 0; y--) {
    if (!this.board[y][x]) {
      return y;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  const piece = document.createElement('div');
  piece.classList.add('piece');
  piece.classList.add(`p${this.currPlayer}`);
  if(this.currPlayer===1){
      piece.style.backgroundColor=pl1.value
 }

  else{
    piece.style.backgroundColor=pl2.value
  }
  piece.style.top = -50 * (y + 2);

  const spot = document.getElementById(`${y}-${x}`);
  spot.append(piece);
 
}

/** endGame: announce game end */

function endGame(msg) {
  alert(msg);

location.reload()
  
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  if(this.gameOver===true){
    return
  }
  // get x from ID of clicked cell

  const x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  const gameFindSpotForCol=findSpotForCol.bind(this)

  const y = gameFindSpotForCol(x);

  if (y === null) {

    return;
  }

  // place piece in board and add to HTML table
  this.board[y][x] = this.currPlayer;
  
const bindplaceInTable=placeInTable.bind(game)
  bindplaceInTable(y, x);
 
  // check for win
  const gamecheckForWin= checkForWin.bind(game)
  if (gamecheckForWin()) {
   
    const gameendGame=endGame.bind(game)
    return gameendGame(`Player ${this.currPlayer} won!`);
    
  }
  
  // check for tie
  if (this.board.every(row => row.every(cell => cell))) {
    return gameendGame('Tie!');
  }
    
  // switch players
  this.currPlayer = this.currPlayer === 1 ? 2 : 1;

}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < this.height &&
        x >= 0 &&
        x < this.width &&
        this.board[y][x] ===this.currPlayer
    );
  }

  for (let y = 0; y < this.height; y++) {
    for (let x = 0; x < this.width; x++) {
      // get "check list" of 4 cells (starting here) for each of the different
      // ways to win
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      // find winner (only checking each win-possibility as needed)
      const gameWin= _win.bind(game)
      if (gameWin(horiz) || gameWin(vert) || gameWin(diagDR) || gameWin(diagDL)) {
        this.gameOver=true  
        return true;
      }
    }
  }
}

// const gameMakeBoard = makeBoard.bind(game);
// const gameMakeHtmlBoard = makeHtmlBoard.bind(game);
// gameMakeBoard()
// gameMakeHtmlBoard()


