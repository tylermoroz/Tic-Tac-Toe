const gameModule = (() => {

    const Gameboard = (() => {
        const cell1 = document.getElementById('cell1');
        const cell2 = document.getElementById('cell2');
        const cell3 = document.getElementById('cell3');
        const cell4 = document.getElementById('cell4');
        const cell5 = document.getElementById('cell5');
        const cell6 = document.getElementById('cell6');
        const cell7 = document.getElementById('cell7');
        const cell8 = document.getElementById('cell8');
        const cell9 = document.getElementById('cell9');

        const gameBoard = [cell1.textContent, cell2.textContent, cell3.textContent, cell4.textContent, cell5.textContent, cell6.textContent, cell7.textContent, cell8.textContent, cell9.textContent];

        return { gameBoard };
    })();

    const player = (name) => {
        const container = document.querySelector('#container');

        let playerNameplate = document.createElement('div');
        let playerName = document.createElement('p');

        playerNameplate.classList.add('nameplate');
        playerName.classList.add('name');

        container.appendChild(playerNameplate);
        playerNameplate.appendChild(playerName);

        playerName.textContent = name;

        return { name, playerNameplate, playerName };
    }

    let playerA = player(prompt('Enter your name', ));
    let playerB = player(prompt('Enter your name', ));

    playerA.playerNameplate.id = "playerA";
    playerB.playerNameplate.id = "playerB";

    playerA.playerName.id = "player1";
    playerB.playerName.id = "player2";


    const displayController = (() => {
        const row1 = [];
        const row2 = [];
        const row3 = [];
        const column1 = [];
        const column2 = [];
        const column3 = [];
        const diagonal1 = [];
        const diagonal2 = [];

        const tieGame = arr => arr.includes('x', 'o');

        let player1 = 'active';
        let player2 = '';

        let playerOneActive = document.getElementById('player1');
        let playerTwoActive = document.getElementById('player2');

        playerOneActive.classList.add('active');

        const gameLogic = function(){

            if(player1 == 'active' && this.textContent == ''){
                this.textContent = 'x';
                player2 = 'active';
                player1 = '';
                playerTwoActive.classList.add('active');
                playerOneActive.classList.remove('active');
            } else if(player2 == 'active' && this.textContent == ''){
                this.textContent = 'o';
                player1 = 'active';
                player2 = '';
                playerOneActive.classList.add('active');
                playerTwoActive.classList.remove('active');
            } else if(player2 == 'active' && this.textContent == 'x'){
                player2 = 'active';
                player1 = '';
                playerTwoActive.classList.add('active');
                playerOneActive.classList.remove('active');
                alert("Player 1 has already selected this tile.");
            } else if(player1 == 'active' && this.textContent == 'o'){
                player1 = 'active';
                player2 = '';
                playerOneActive.classList.add('active');
                playerTwoActive.classList.remove('active');
                alert("Player 2 has already selected this tile.");
            } else if (player2 == 'active' && this.textContent == 'o'){
                player2 = 'active';
                player1 = '';
                playerTwoActive.classList.add('active');
                playerOneActive.classList.remove('active');
                alert("You have already selected this tile.");
            } else if (player1 == 'active' && this.textContent == 'x'){
                player1 = 'active';
                player2 = '';
                playerOneActive.classList.add('active');
                playerTwoActive.classList.remove('active');
                alert("You have already selected this tile.");
            }

            if(this == cell1){
                Gameboard.gameBoard[0] = cell1.textContent;
                row1.push(cell1.textContent);
                column1.push(cell1.textContent);
                diagonal1.push(cell1.textContent);
            } else if(this == cell2){
                Gameboard.gameBoard[1] = cell2.textContent;
                row1.push(cell2.textContent);
                column2.push(cell2.textContent);
            } else if(this == cell3){
                Gameboard.gameBoard[2] = cell3.textContent;
                row1.push(cell3.textContent);
                column3.push(cell3.textContent);
                diagonal2.push(cell3.textContent);
            } else if(this == cell4){
                Gameboard.gameBoard[3] = cell4.textContent;
                row2.push(cell4.textContent);
                column1.push(cell4.textContent);
            } else if(this == cell5){
                Gameboard.gameBoard[4] = cell5.textContent;
                row2.push(cell5.textContent);
                column2.push(cell5.textContent);
                diagonal1.push(cell5.textContent);
                diagonal2.push(cell5.textContent);
            } else if(this == cell6){
                Gameboard.gameBoard[5] = cell6.textContent;
                row2.push(cell6.textContent);
                column3.push(cell6.textContent);
            } else if(this == cell7){
                Gameboard.gameBoard[6] = cell7.textContent;
                row3.push(cell7.textContent);
                column1.push(cell7.textContent);
                diagonal2.push(cell7.textContent);
            } else if(this == cell8){
                Gameboard.gameBoard[7] = cell8.textContent;
                row3.push(cell8.textContent);
                column2.push(cell8.textContent);
            } else if(this == cell9){
                Gameboard.gameBoard[8] = cell9.textContent;
                row3.push(cell9.textContent);
                column3.push(cell9.textContent);
                diagonal1.push(cell9.textContent);
            }

            console.log(Gameboard.gameBoard);

            const endGame = function(){
                cell1.removeEventListener('click', gameLogic);
                cell2.removeEventListener('click', gameLogic);
                cell3.removeEventListener('click', gameLogic);
                cell4.removeEventListener('click', gameLogic);
                cell5.removeEventListener('click', gameLogic);
                cell6.removeEventListener('click', gameLogic);
                cell7.removeEventListener('click', gameLogic);
                cell8.removeEventListener('click', gameLogic);
                cell9.removeEventListener('click', gameLogic);
            }

            if(Gameboard.gameBoard[0] =='x' && Gameboard.gameBoard[1] == 'x' && Gameboard.gameBoard[2] == 'x'){
                console.log('player 1 wins');
                endGame();
            } else if(Gameboard.gameBoard[3] == 'x' && Gameboard.gameBoard[4] =='x' && Gameboard.gameBoard[5] == 'x'){
                console.log('player 1 wins');
                endGame();
            } else if(Gameboard.gameBoard[6] =='x' && Gameboard.gameBoard[7] =='x' && Gameboard.gameBoard[8] == 'x'){
                console.log('player 1 wins');
                endGame();
            } else if(Gameboard.gameBoard[0] =='x' && Gameboard.gameBoard[3] =='x' && Gameboard.gameBoard[6] == 'x'){
                console.log('player 1 wins');
                endGame();
            } else if(Gameboard.gameBoard[1] == 'x' && Gameboard.gameBoard[4] == 'x' && Gameboard.gameBoard[7] == 'x'){
                console.log('player 1 wins');
                endGame();
            } else if(Gameboard.gameBoard[2] == 'x' && Gameboard.gameBoard[5] == 'x' && Gameboard.gameBoard[8] == 'x'){
                console.log('player 1 wins');
                endGame();
            } else if(Gameboard.gameBoard[0] == 'x' && Gameboard.gameBoard[4] == 'x' && Gameboard.gameBoard[8] == 'x'){
                console.log('player 1 wins');
                endGame();
            } else if(Gameboard.gameBoard[2] == 'x' && Gameboard.gameBoard[4] == 'x' && Gameboard.gameBoard[6] == 'x'){
                console.log('player 1 wins');
                endGame();
            } else if(Gameboard.gameBoard[0] == 'o' && Gameboard.gameBoard[1] == 'o' && Gameboard.gameBoard[2] == 'o'){
                console.log('player 2 wins');
                endGame();
            } else if(Gameboard.gameBoard[3] == 'o' && Gameboard.gameBoard[4] == 'o' && Gameboard.gameBoard[5] == 'o'){
                console.log('player 2 wins');
                endGame();
            } else if(Gameboard.gameBoard[6] == 'o' && Gameboard.gameBoard[7] == 'o' && Gameboard.gameBoard[8] == 'o'){
                console.log('player 2 wins');
                endGame();
            } else if(Gameboard.gameBoard[0] == 'o' && Gameboard.gameBoard[3] == 'o' && Gameboard.gameBoard[6] == 'o'){
                console.log('player 2 wins');
                endGame();
            } else if(Gameboard.gameBoard[1] == 'o' && Gameboard.gameBoard[4] == 'o' && Gameboard.gameBoard[7] == 'o'){
                console.log('player 2 wins');
            } else if(Gameboard.gameBoard[2] == 'o' && Gameboard.gameBoard[5] == 'o' && Gameboard.gameBoard[8] == 'o'){
                console.log('player 2 wins');
                endGame();
            } else if(Gameboard.gameBoard[0] == 'o' && Gameboard.gameBoard[4] == 'o' && Gameboard.gameBoard[8] == 'o'){
                console.log('player 2 wins');
                endGame();
            } else if(Gameboard.gameBoard[2] == 'o' && Gameboard.gameBoard[4] == 'o' && Gameboard.gameBoard[6] == 'o'){
                console.log('player 2 wins');
                endGame();
            }

            if(row1.length == 3 && row2.length == 3 && row3.length == 3 && column1.length == 3 && column2.length == 3 && column3.length == 3 && diagonal1.length == 3 && diagonal2.length == 3 && tieGame(row1) && tieGame(row2) && tieGame(row3) && tieGame(column1) && tieGame(column2) && tieGame(column3) && tieGame(diagonal1) && tieGame(diagonal2)){
                console.log("Tie Game!");
            }
            
        }

        cell1.addEventListener('click', gameLogic);
        cell2.addEventListener('click', gameLogic);
        cell3.addEventListener('click', gameLogic);
        cell4.addEventListener('click', gameLogic);
        cell5.addEventListener('click', gameLogic);
        cell6.addEventListener('click', gameLogic);
        cell7.addEventListener('click', gameLogic);
        cell8.addEventListener('click', gameLogic);
        cell9.addEventListener('click', gameLogic);
        
        return { };
    })();

    return { Gameboard,
             player,
             displayController,
             playerA,
             playerB,
            }

})();