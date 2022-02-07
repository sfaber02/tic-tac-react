import React from "react";

//generate default board state and intialize turn counter
let turn = 1;
let boardState = [];
console.log ('reset');
for (let row = 0; row <= 2; row++){
    boardState.push([]);
    for (let column = 0; column <= 2; column++){
        boardState[row].push(0);
    }
}



class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {header: 'Tic Tac React', bState: [boardState]};
    }
  
    handleClick(e){
        let x = e.target.id.slice(0,1);
        let y = e.target.id.slice(1);
        let xo;
        if (boardState[x][y] == 0) {
            xo = turn % 2 == 0 ? [2, 'O'] : [1, 'X'];
            turn++;
            document.getElementById(e.target.id).innerHTML = xo[1];
            boardState[x][y] = xo[0];
            this.setState({bState : boardState})
        }
        //lil bit of debugging
        //console.log(this.state.bState);

    }

    checkWin() {
        console.log (this.state.bState[0].reduce((a, b) => a + b));
        if(this.state.bState[0].reduce((a, b) => a + b) === 6){
            document.getElementById('msgArea').innerHTML = 'O WINS';
        } 
    }
  
    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <table>
                <tr>
                    <td id='00' onClick={e => this.handleClick(e)}>0,0</td>
                    <td class="vert" id='01' onClick={e => this.handleClick(e)}>0,1</td>
                    <td id='02' onClick={e => this.handleClick(e)}>0,2</td>
                </tr>
                <tr>
                    <td class="hori" id='10' onClick={e => this.handleClick(e)}>1,0</td>
                    <td class="vert hori" id='11' onClick={e => this.handleClick(e)}>1,1</td>
                    <td class="hori" id='12' onClick={e => this.handleClick(e)}>1,2</td>
                </tr>
                <tr>
                    <td id='20' onClick={e => this.handleClick(e)}>2,0</td>
                    <td class="vert" id='21' onClick={e => this.handleClick(e)}>2,1</td>
                    <td id='22' onClick={e => this.handleClick(e)}>2,2</td>
                </tr>
                </table>
                <h1 id='msgArea'>{turn % 2 != 0 ? "X's" : "O's"} turn</h1>
                {this.checkWin()}
                <br /><br />
                <h2>Test Area</h2>
                <h3>Board State</h3>
                {this.state.bState}
                <h3>Turn</h3>
                {Math.floor(turn / 2)}
            </div>
        );
    }
}

export { Board };