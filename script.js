const gameModule = (() => {

    const Gameboard = (() => {
        const gameBoard = [];
        return { gameBoard };
    })();

    const displayController = (() => {
        const gameCell = document.querySelector('.gamecell');
        gameCell.addEventListener('click', function(){
            const choice = document.createElement('p');
            choice.textContent = 'x';
            gameCell.appendChild(choice);  
            Gameboard.gameBoard.push(choice.textContent);
            console.log(choice.textContent);
            console.log(Gameboard.gameBoard);
        })          
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