const Gameboard = (() => {
    const playerChoice = [];
    return { playerChoice };
})();

const players = (position) => {
    const form = document.querySelector("#player-names");
    const playerName = form.elements[position];
    let name = playerName.value;   

    return { name };
}

const displayController = (() => {

    let currentPlayer;

    const submitBtn = document.querySelector(".submit-button");
    const modal = document.getElementById("formModal");
    const body = document.querySelector('body');
    const winnerModal = document.createElement('div');
    const tieModal = document.createElement('div');
    
    const submitPlayers = (event) => {
        event.preventDefault();
        playerOne = players("player-one");
        playerTwo = players("player-two");
        player1.textContent = playerOne.name;
        player2.textContent = playerTwo.name;
        currentPlayer = playerOne;
        modal.style.visibility = "hidden";
        addInput();

        return { playerOne, playerTwo }
    }

    submitBtn.addEventListener('click', submitPlayers);

    const cells = document.getElementsByClassName("cell");
    const player1 = document.querySelector("#player1");
    const player2 = document.querySelector("#player2");
    const cell1 = document.querySelector("#cell-1");
    const cell2 = document.querySelector("#cell-2");
    const cell3 = document.querySelector("#cell-3");
    const cell4 = document.querySelector("#cell-4");
    const cell5 = document.querySelector("#cell-5");
    const cell6 = document.querySelector("#cell-6");
    const cell7 = document.querySelector("#cell-7");
    const cell8 = document.querySelector("#cell-8");
    const cell9 = document.querySelector("#cell-9");

    const activePlayer = (player, position) => {
        currentPlayer = player;
        position.classList.add('active-player');
    }

    const inactivePlayer = (position) => {
        position.classList.remove('active-player');
    }

    const winner = (player) => {
        winnerModal.classList.add('result');
        winnerModal.textContent = `${player.name} Wins!`;
        body.appendChild(winnerModal);
    }

    const tie = () => {
        tieModal.classList.add('result');
        tieModal.textContent = 'Tie Game!'
        body.appendChild(tieModal);
    }

    const restartGame = () => {
        const restartBtn = document.getElementById("restart-btn");

        restartBtn.addEventListener('click', () => {
            Gameboard.playerChoice.length = 0;
            modal.style.visibility = "visible";
            if ([...body.children].includes(winnerModal)){
                body.removeChild(winnerModal);
            } else if ([...body.children].includes(tieModal)){
                body.removeChild(tieModal);
            }
            for(const cell of cells){
                cell.textContent = '';
            }
            activePlayer(playerOne, player1);
            inactivePlayer(player2);
        })
    }

    const winCondition = () => {
        const row1 = [cell1.textContent, cell2.textContent, cell3.textContent];
        const row2 = [cell4.textContent, cell5.textContent, cell6.textContent];
        const row3 = [cell7.textContent, cell8.textContent, cell9.textContent];
        const col1 = [cell1.textContent, cell4.textContent, cell7.textContent];
        const col2 = [cell2.textContent, cell5.textContent, cell8.textContent];
        const col3 = [cell3.textContent, cell6.textContent, cell9.textContent];
        const diag1 = [cell1.textContent, cell5.textContent, cell9.textContent];
        const diag2 = [cell3.textContent, cell5.textContent, cell7.textContent];

        const playerOneValue = (value) => value == 'X';
        const playerTwoValue = (value) => value == 'O';

        if(row1.every(playerOneValue) || row2.every(playerOneValue) || row3.every(playerOneValue) || col1.every(playerOneValue) || col2.every(playerOneValue) || col3.every(playerOneValue) || diag1.every(playerOneValue) || diag2.every(playerOneValue)){
            winner(playerOne);
            inactivePlayer(player2);
        } else if(row1.every(playerTwoValue) || row2.every(playerTwoValue) || row3.every(playerTwoValue) || col1.every(playerTwoValue) || col2.every(playerTwoValue) || col3.every(playerTwoValue) || diag1.every(playerTwoValue) || diag2.every(playerTwoValue)){
            winner(playerTwo);
            inactivePlayer(player1);
        } else if(Gameboard.playerChoice.length == 9){
            tie();
            inactivePlayer(player1);
            inactivePlayer(player2);
        }
        
    }
    
    const playerInput = (target) => {
        
        if(target.textContent == "X" || target.textContent == "O"){
            target.removeEventListener('click', () => { playerInput(target) });
            return;
        }else if(currentPlayer == playerOne){
            target.textContent = "X";
            activePlayer(playerTwo, player2);
            inactivePlayer(player1);
        } else if(currentPlayer == playerTwo){
            target.textContent = "O";
            activePlayer(playerOne, player1);
            inactivePlayer(player2);
        }
        Gameboard.playerChoice.push(target.textContent);
        winCondition();

    }    

    const addInput = () => {
        for(let cell of cells){
            cell.addEventListener('click', () => { playerInput(cell) });
        }   
    }

    restartGame();
    
})();