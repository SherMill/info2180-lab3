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

 /*Ex 2: X/O for clickable squares */

function addClickHandlers(){
    const squares = document.querySelectorAll('.square'); //square class
    let curPlayer = 'X'; //starts with player X
    squares.forEach(square => {
        square.addEventListener('click', function(){
            if (!square.textContent){ //checks the emptiness of the square to disallow cheating for Ex. 6
                square.textContent = curPlayer; 
                square.classList.add(curPlayer);
                checkWinner(); //checks to see whether X or the O player is the winner
                curPlayer = curPlayer == 'X' ? 'O' : 'X'; 
            }
        });
    });
}

const square = document.querySelectorAll('#board > div');

/*Ex 3: Changes the style when the mouse is moved over a square */

function addHoverEffect(){
    const squares = document.querySelectorAll('#board > div');
    //adds 2 event listensers for mouseover and mouseout for visual effects
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });
        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });
    });
}

/*Ex 4: Checks for Winners and Does a Status Update*/

function checkWinner(){
    const squares = document.querySelectorAll('#board > div');
    const pWinCombinations = [ //shows all possible winning combos
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [3, 4, 5], [6, 7, 8],  //columns
        [0, 4, 8], [2, 4, 6]    //diagonals
    ];
    pWinCombinations.forEach((pWin) => {
        const [a, b, c] = pWin;
        if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
            document.getElementById('status').textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
            document.getElementById('status').classList.add('you-won'); //the styling class
        }
    });
}

/*Ex 5: Restart the Game*/
function newGame(){
    console.log('Resetting game...'); //sends message to console
    const squares = document.querySelectorAll('#board div');
    squares.forEach(square => {
        square.textContent = '';
        square.classList.remove('X', 'O');
    });
    const status = document.getElementById('status');
    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
    status.classList.remove('you-won'); //removes the you-won before initalising
    initializeGame(); //Initialise again
}

document.querySelector(btn).addEventListener('click', newGame);