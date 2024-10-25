//Written by: Sheri-lee Mills
//Done for Lab 3 ofINFO2180

/*Ex 1: event handler used for page loading so that DOM is fully loaded before the scipt runs*/

document.addEventListener('DOMContentLoaded', function(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.add('square');
    })
});

/*Ex 2: X/O for clicked squares */

//tracks square states and starts with player X
let gState = ['', '', '', '', '', '', '', '', ''];
let curPlayer = 'X'; 

//square clicking being handled here
document.querySelectorAll('.square').forEach((square, ind) => {
    square.addEventListener('click', function(){
        if(gState[ind] === ''){
            gState[ind] === curPlayer; //check square emptiness
            square.textContent = curPlayer; //For X or O
            square.classList.add(curPlayer); //Add class for styling
            curPlayer = curPlayer === 'X' ? 'O' : 'X'; //player switching to O / X vice versa
            checkWinner(); //stops at winner
        }
    });
});

/*Ex 3: Sytle change when mouse hovers over a square */

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', function(){
        square.classList.add('hover');
    });
    square.addEventListener('mouseout', function(){
        square.classList.remove('hover');
    });
})

/*Ex 4: Checks for Winners and Does a Status Update*/

function checkWinner(){
    const winCombinations = [
        [0, 3, 6], [3, 4, 5], [6, 7, 8],  //columns
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 4, 8], [2, 4, 6]    //diagonals
    ];
    winCombinations.forEach((pWin) => {
        if (gState[pWin[0]] && gState[pWin[0]] === gState[pWin[1]] && gState[pWin[1]] === gState[pWin[2]]){
            document.getElementById('status').textContent = `Congratulations! ${gState[pWin[0]]} is the Winner!`;
            document.getElementById('status').classList.add('you-won');
        }
    });
}


