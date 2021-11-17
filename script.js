const gameModule = (() => {

    const Gameboard = (() => {
        const gameBoard = [];
        return { gameBoard };
    })();

    const displayController = (() => {
        let player1 = 'active';
        let player2 = '';
        const gameCell = [...document.querySelectorAll('.gamecell')].forEach(function (cell){
            cell.addEventListener('click', function(){

                if(player1 == 'active' && cell.textContent == ''){
                    cell.textContent = 'x';
                    player2 = 'active';
                    player1 = '';
                } else if(player2 == 'active' && cell.textContent == ''){
                    cell.textContent = 'o';
                    player1 = 'active';
                    player2 = '';
                } else if(player2 == 'active' && cell.textContent == 'x'){
                    cell.textContent = 'x';
                    player2 = 'active';
                    player1 = '';
                    alert("Player 1 has already selected this tile.");
                } else if(player1 == 'active' && cell.textContent == 'o'){
                    cell.textContent = 'o';
                    player1 = 'active';
                    player2 = '';
                    alert("Player 2 has already selected this tile.");
                }
 
                Gameboard.gameBoard.push(cell.textContent);
                
            })
        });          
        return { gameCell, };
    })();

    const player = (name) => {
        return { name };
    }

    return { Gameboard,
             player,
             displayController,
            }

})();