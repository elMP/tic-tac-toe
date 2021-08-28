class TicTacToe {
  constructor() {
    this.currentPlayer = 'x';
    this.field = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.turns = 9;
    this.winner = null;
    this.finish = false;
    this.draw = false;
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    //console.log(rowIndex, columnIndex)
    if (this.field[rowIndex][columnIndex] == 'x' || this.field[rowIndex][columnIndex] === 'o')
      return;

    this.field[rowIndex][columnIndex] = this.currentPlayer;

    //check win
    if (this.field[rowIndex][0] == this.field[rowIndex][1] && this.field[rowIndex][0] == this.field[rowIndex][2])
      this.winner = this.currentPlayer;

    if (this.field[0][columnIndex] == this.field[1][columnIndex] && this.field[0][columnIndex] == this.field[2][columnIndex])
      this.winner = this.currentPlayer;

    if (this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2] && this.field[0][0] !== ' ')
      this.winner = this.currentPlayer;

    if (this.field[0][2] == this.field[1][1] && this.field[2][0] == this.field[1][1] && this.field[1][1] !== ' ')
      this.winner = this.currentPlayer;

    if (this.winner) {
      this.finish = true;
    }

    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';

    this.turns--;
    if (!this.turns && !this.winner) {
      this.draw = true;
      this.finish = true;
    }
    //console.log(this.currentPlayer === 'x')
  }

  isFinished() {
    return this.finish;
  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    return !Boolean(this.turns);
  }

  isDraw() {
    return this.draw;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex] !== ' ' ? this.field[rowIndex][colIndex] : null;
  }
}

module.exports = TicTacToe;
