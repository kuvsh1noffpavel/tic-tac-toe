class TicTacToe {
    constructor() {
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] === null){
            this.gameField[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol === 'x'){
                this.currentPlayerSymbol = 'o';
            } else {
                this.currentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        return (this.getWinner() != null || this.noMoreTurns());
    }

    getWinner() {
        if (this.gameField[0][0] === this.gameField[0][1] && this.gameField[0][0] === this.gameField[0][2]){
            return this.gameField[0][0];
        } else if (this.gameField[1][0] === this.gameField[1][1] && this.gameField[1][0] === this.gameField[1][2]){
            return this.gameField[1][0];
        } else if (this.gameField[2][0] === this.gameField[2][1] && this.gameField[2][0] === this.gameField[2][2]){
            return this.gameField[2][0];
        } else if (this.gameField[0][0] === this.gameField[1][0] && this.gameField[0][0] === this.gameField[2][0]){
            return this.gameField[0][0];
        } else if (this.gameField[0][1] === this.gameField[1][1] && this.gameField[0][1] === this.gameField[2][1]){
            return this.gameField[0][1];
        } else if (this.gameField[0][2] === this.gameField[1][2] && this.gameField[0][2] === this.gameField[2][2]){
            return this.gameField[0][2];
        } else if (this.gameField[0][0] === this.gameField[1][1] && this.gameField[0][0] === this.gameField[2][2]){
            return this.gameField[0][0];
        } else if (this.gameField[2][0] === this.gameField[1][1] && this.gameField[2][0] === this.gameField[0][2]){
            return this.gameField[2][0];
        } else {
            return null;
        }
    }

    noMoreTurns() {
        for (let x in this.gameField){
            for (let y in this.gameField[x]){
                if(this.gameField[x][y] === null){
                    return false;
                }
            }
        }

        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && this.getWinner() == null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}


module.exports = TicTacToe;