import React from "react";


console.log ('reset');
//generate default board state and intialize variables for new game
let boardState = [];
for (let row = 0; row <= 2; row++){
    boardState.push([]);
    for (let column = 0; column <= 2; column++){
        boardState[row].push(0);
    }
}



class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {header: 'Reac-Tac-toe', turn: 1, bState: [boardState], msgArea : "X's turn", gameOver : false};
    }

    initialState() {
        let boardState = [];
        for (let row = 0; row <= 2; row++){
            boardState.push([]);
            for (let column = 0; column <= 2; column++){
                boardState[row].push(0);
            }
        }
    }
  
    handleClick(e){
        if (!this.state.gameOver){
            let x = e.target.id.slice(0,1);
            let y = e.target.id.slice(1);
            let xo;
            if (boardState[x][y] == 0) {
                xo = this.state.turn % 2 == 0 ? [4, 'O'] : [1, 'X'];
                this.state.turn++;
                document.getElementById(e.target.id).innerHTML = xo[1];
                boardState[x][y] = xo[0];
                this.setState({bState : boardState})
            }
            this.checkWin();

            //lil bit of debugging
            console.log(this.state.bState);
        }
    }

    checkWin() {
        //there are 16 possible win conditons 8 for X, 8 for O
        //an x = 1 and o = 4.  therefore a win for x is a row/col/diag that sums 3 and a sum of 12 for O

        let lineSum = boardState[0][0] + boardState[0][1] + boardState[0][2];
        if (lineSum === 3 || lineSum === 12){
            lineSum === 3 ? document.getElementById('msgArea').innerHTML = 'X WINS' : document.getElementById('msgArea').innerHTML = 'O WINS'
        };
        lineSum = boardState[1][0] + boardState[1][1] + boardState[1][2];
        if (lineSum === 3 || lineSum === 12){
            lineSum === 3 ? document.getElementById('msgArea').innerHTML = 'X WINS' : document.getElementById('msgArea').innerHTML = 'O WINS'
        };
        lineSum = boardState[2][0] + boardState[2][1] + boardState[2][2];
        if (lineSum === 3 || lineSum === 12){
            lineSum === 3 ? document.getElementById('msgArea').innerHTML = 'X WINS' : document.getElementById('msgArea').innerHTML = 'O WINS'
        };
        lineSum = boardState[0][0] + boardState[1][0] + boardState[2][0];
        if (lineSum === 3 || lineSum === 12){
            lineSum === 3 ? document.getElementById('msgArea').innerHTML = 'X WINS' : document.getElementById('msgArea').innerHTML = 'O WINS'
        };
        lineSum = boardState[0][1] + boardState[1][1] + boardState[2][1];
        if (lineSum === 3 || lineSum === 12){
            lineSum === 3 ? document.getElementById('msgArea').innerHTML = 'X WINS' : document.getElementById('msgArea').innerHTML = 'O WINS'
        };
        lineSum = boardState[0][2] + boardState[1][2] + boardState[2][2];
        if (lineSum === 3 || lineSum === 12){
            lineSum === 3 ? document.getElementById('msgArea').innerHTML = 'X WINS' : document.getElementById('msgArea').innerHTML = 'O WINS'
        };
        lineSum = boardState[0][0] + boardState[1][1] + boardState[2][2];
        if (lineSum === 3 || lineSum === 12){
            lineSum === 3 ? document.getElementById('msgArea').innerHTML = 'X WINS' : document.getElementById('msgArea').innerHTML = 'O WINS'
        };
        lineSum = boardState[0][2] + boardState[1][1] + boardState[2][0];
        if (lineSum === 3 || lineSum === 12){
            lineSum === 3 ? document.getElementById('msgArea').innerHTML = 'X WINS' : document.getElementById('msgArea').innerHTML = 'O WINS'
        };
        if (document.getElementById('msgArea').innerHTML === 'X WINS' || document.getElementById('msgArea').innerHTML === 'O WINS'){
                this.setState({ gameOver: true });
        } 
    }

    handleReset (e) {
        console.log('it worked!')
    }

  
    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <table>
                <tr>
                    <td id='00' onClick={e => this.handleClick(e)}></td>
                    <td class="vert" id='01' onClick={e => this.handleClick(e)}></td>
                    <td id='02' onClick={e => this.handleClick(e)}></td>
                </tr>
                <tr>
                    <td class="hori" id='10' onClick={e => this.handleClick(e)}></td>
                    <td class="vert hori" id='11' onClick={e => this.handleClick(e)}></td>
                    <td class="hori" id='12' onClick={e => this.handleClick(e)}></td>
                </tr>
                <tr>
                    <td id='20' onClick={e => this.handleClick(e)}></td>
                    <td class="vert" id='21' onClick={e => this.handleClick(e)}></td>
                    <td id='22' onClick={e => this.handleClick(e)}></td>
                </tr>
                </table>
                <h1 id='msgArea'>{this.state.turn % 2 != 0 ? "X's" : "O's"} turn</h1>
                {!this.state.gameOver ? <button onClick={e => this.handleReset(e)}>Reset Game</button> : true}
                <br /><br />
                <h2>Test Area</h2>
                <h3>Board State</h3>
                {this.state.bState}
                <h3>Turn</h3>
                {Math.floor(this.state.turn / 2)}
            </div>
        );
    }
}

export { Board };