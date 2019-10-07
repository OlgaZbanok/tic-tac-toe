class TicTacToe {
    constructor() {
        let layer = new Array(3);
        for (let i = 0; i < 3; i++ ){
            layer[i] = new Array(3).fill(null);
        }
        this.layer=layer;
        this.players = { playerX:'x',
                         playerO : 'o' };
        this.currentPlayer=this.players.playerX;
        this.numberMoves= 0;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.layer[rowIndex][columnIndex] == null)
        {
            this.layer[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer == 'x' ? this.currentPlayer = this.players.playerO : this.currentPlayer = this.players.playerX;
            this.numberMoves++;
        }

    }

    isFinished() {
        if (this.getWinner() || (this.noMoreTurns()))
            return true;
        else return false;
    }

    getWinner() {
        let curLayer= this.layer;
        let mascol=[], masrow=[], mascross1=[], mascross2 =[];
        if (this.numberMoves >= 5) { 
            for (let i=0; i< 3 ; i++) { 
                mascross1[i] = curLayer[i][i];
                mascross2[i] = curLayer[2-i][i];
                for (let j=0; j< 3; j++) {
                    masrow[j] = curLayer[i][j];
                    mascol[j] = curLayer[j][i];
                }
                if ((masrow.every(el => el == this.players.playerX)) || (mascol.every(el => el == this.players.playerX))) return this.players.playerX;
                if ((masrow.every(el => el == this.players.playerO)) || (mascol.every(el => el == this.players.playerO))) return this.players.playerO;
            }
            if ((mascross1.every(el => el == this.players.playerX)) || (mascross2.every(el => el == this.players.playerX))) return this.players.playerX;
            if ((mascross1.every(el => el == this.players.playerO)) || (mascross2.every(el => el == this.players.playerO))) {let flag= true; return this.players.playerO;}

        }
        return null;
    }

    noMoreTurns() {
        for (let m of this.layer) {
            if (m.includes(null)) 
                return false;
        }
        return true;
    }

    isDraw() {
        this.isFinished();
        this.getWinner();
        if (!(this.isFinished()) || (this.getWinner()))
            return false;
        else 
            if (this.isFinished()) 
                return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.layer[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
