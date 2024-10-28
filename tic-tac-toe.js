//Written by: Sheri-lee Mills
//Done for Lab 3 ofINFO2180

/*Ex 1: Layout the Board*/

//only runs after the entire page structure is ready
document.addEventListener('DOMContentLoaded', function(){
    initializeGame();
});


function initializeGame(){
    const squares = document.querySelectorAll('#board div'); //selects all div elements
    squares.forEach(square => {
        square.classList.add('square');
    });
    addClickHandlers(); //allows the squares to be clickable
    addHoverEffect(); //sets the hover effects when the mouse hovers over the square
}

 /*Ex 2: X/O for clicked squares */


function addClickHandlers(){
    const squares = document.querySelectorAll('.square'); //square class
    let curPlayer = 'X'; //starts with player X
    squares.forEach(square => {
        square.addEventListener('click', function(){
            if (!square.textContent){ //checks the emptiness of the square
                square.textContent = curPlayer;
                square.classList.add(curPlayer);
                checkWinner();
                curPlayer = curPlayer == 'X' ? 'O' : 'X';
            }
        });
    });
}

const square = document.querySelectorAll('#board > div');

squares.forEach(square => {
    square.addEventListener('mouseover', function(){
        square.classList.add('hover');
    });
    square.addEventListener('mouseout', function(){
        square.classList.remove('hover');
    });
});

/*Ex 4: Checks for Winners and Does a Status Update*/

function checkWinner(){
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [3, 4, 5], [6, 7, 8],  //columns
        [0, 4, 8], [2, 4, 6]    //diagonals
    ];
    winCombinations.forEach((pWin) => {
        if (gState[pWin[0]] && gState[pWin[0]] === gState[pWin[1]] && gState[pWin[1]] === gState[pWin[2]]){
            document.getElementById('status').textContent = `Congratulations! ${gState[pWin[0]]} is the Winner!`;
            document.getElementById('status').classList.add('you-won');
            gActive = false;
        }
    });
}
/*
    document.querySelector('.btn').addEventListener('click', () => {
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
        const status = document.getElementById('status');
        status.textContent = 'Move your mouse over a square and click to play an O or X';
        status.classList.remove('you-won');
    });

   function newGame(){
        const squares = document.querySelectorAll('#board div');
        squares.forEach(square => square.textContent = '');
        const status = document.getElementById('status');
        status.textContent = 'Move your mouse over a square and click to play an O or X';
        status.classList.remove('you-won');
   } 

   document.querySelector('.btn').addEventListener('click', newGame);

   document.querySelectorAll('#board div').forEach(square =>{ 
        square.addEventListener('click', function(){
            if (this.textContent === ''){
                this.textContent = curPlayer;
                checkWinner();
            }
        });
   });

document.getElementById(.btn:hover).addEventListener('click', function(){
    initializeGame();
    document.querySelectorAll('.square').forEach(square => {
        square.textContent = '';
        square.classList.remove('X', 'O');
    });
    document.getElementById('status').textContent = 'Move your mouse over a square and click to play an O or X.'
    document.getElementById('status').classList.remove('you-won');
});