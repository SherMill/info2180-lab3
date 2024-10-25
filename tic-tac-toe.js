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