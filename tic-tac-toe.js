//Written by: Sheri-lee Mills
//Done for Lab 3 ofINFO2180

/*Ex 1: event handler used for page loading so that DOM is fully loaded before the scipt runs*/

document.addEventListener('DOMContentLoaded', function(){
    initializeGame();
});

function initializeGame(){
    const squares = document.querySelectorAll('#board div');
    squares.forEach(square => {
        square.classList.add('square');
    });
    addClickHandlers();
}

function addClickHandlers(){
    const squares = document.querySelectorAll('.square');
    let curPlayer = 'X';
    squares.forEach(square => {
        square.addEventListener('click', function(){ 

            if (!square.textContent){ //Check if the square is empty
                square.textContent = curPlayer;
                square.classList.add(curPlayer);
                curPlayer = curPlayer === 'X' ? 'O' : 'X'; //player switching here
                checkWinner();
            }
        });    
    });
}

const square = socument.querySelectorAll('#board > div');



    /*Ex 2: X/O for clicked squares */

    //tracks square states and starts with player X
    /*let gState = ['', '', '', '', '', '', '', '', ''];
    let curPlayer = 'X'; 
    let gActive = true;*/

    //square clicking being handled here
    
 /*   squares.forEach((square, ind)=> {
        square.addEventListener('click', function(){
            if(gState[ind] === '' && gActive){ //part 6: the error check as it checks if the square is empty before doing any changes
                gState[ind] === curPlayer; //check square emptiness
                square.textContent = curPlayer; //For X or O
                square.classList.add(curPlayer); //Add class for styling
                curPlayer = curPlayer === 'X' ? 'O' : 'X'; //player switching to O / X vice versa
                checkWinner(); //stops at winner
            }
        });

    });*/

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

