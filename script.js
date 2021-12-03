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

        const tieGame = arr => arr.includes('x', 'o');

        let player1 = 'active';
        let player2 = '';

        let playerOneActive = document.getElementById('player1');
        let playerTwoActive = document.getElementById('player2');

        playerOneActive.classList.add('active');

        const gameCell = [...document.querySelectorAll('.gamecell')].forEach(function (cell){
            cell.addEventListener('click', function(){

                if (player1 == 'active'){
                    playerTwoActive.classList.add('active');
                    playerOneActive.classList.remove('active');
                } else if (player2 == 'active'){
                    playerOneActive.classList.add('active');
                    playerTwoActive.classList.remove('active');
                }
                

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

                if(cell == cell1){
                    Gameboard.gameBoard[0] = cell1.textContent;
                } else if(cell == cell2){
                    Gameboard.gameBoard[1] = cell2.textContent;
                } else if(cell == cell3){
                    Gameboard.gameBoard[2] = cell3.textContent;
                } else if(cell == cell4){
                    Gameboard.gameBoard[3] = cell4.textContent;
                } else if(cell == cell5){
                    Gameboard.gameBoard[4] = cell5.textContent;
                } else if(cell == cell6){
                    Gameboard.gameBoard[5] = cell6.textContent;
                } else if(cell == cell7){
                    Gameboard.gameBoard[6] = cell7.textContent;
                } else if(cell == cell8){
                    Gameboard.gameBoard[7] = cell8.textContent;
                } else if(cell == cell9){
                    Gameboard.gameBoard[8] = cell9.textContent;
                }

                console.log(Gameboard.gameBoard);

                if(Gameboard.gameBoard[0] =='x' && Gameboard.gameBoard[1] == 'x' && Gameboard.gameBoard[2] == 'x'){
                    console.log('player 1 wins');
                } else if(Gameboard.gameBoard[3] == 'x' && Gameboard.gameBoard[4] =='x' && Gameboard.gameBoard[5] == 'x'){
                    console.log('player 1 wins');
                } else if(Gameboard.gameBoard[6] =='x' && Gameboard.gameBoard[7] =='x' && Gameboard.gameBoard[8] == 'x'){
                    console.log('player 1 wins');
                } else if(Gameboard.gameBoard[0] =='x' && Gameboard.gameBoard[3] =='x' && Gameboard.gameBoard[6] == 'x'){
                    console.log('player 1 wins');
                } else if(Gameboard.gameBoard[1] == 'x' && Gameboard.gameBoard[4] == 'x' && Gameboard.gameBoard[7] == 'x'){
                    console.log('player 1 wins');
                } else if(Gameboard.gameBoard[2] == 'x' && Gameboard.gameBoard[5] == 'x' && Gameboard.gameBoard[8] == 'x'){
                    console.log('player 1 wins');
                } else if(Gameboard.gameBoard[0] == 'x' && Gameboard.gameBoard[4] == 'x' && Gameboard.gameBoard[8] == 'x'){
                    console.log('player 1 wins');
                } else if(Gameboard.gameBoard[2] == 'x' && Gameboard.gameBoard[4] == 'x' && Gameboard.gameBoard[6] == 'x'){
                    console.log('player 1 wins');
                } else if(Gameboard.gameBoard[0] == 'o' && Gameboard.gameBoard[1] == 'o' && Gameboard.gameBoard[2] == 'o'){
                    console.log('player 2 wins');
                } else if(Gameboard.gameBoard[3] == 'o' && Gameboard.gameBoard[4] == 'o' && Gameboard.gameBoard[5] == 'o'){
                    console.log('player 2 wins');
                } else if(Gameboard.gameBoard[6] == 'o' && Gameboard.gameBoard[7] == 'o' && Gameboard.gameBoard[8] == 'o'){
                    console.log('player 2 wins');
                } else if(Gameboard.gameBoard[0] == 'o' && Gameboard.gameBoard[3] == 'o' && Gameboard.gameBoard[6] == 'o'){
                    console.log('player 2 wins');
                } else if(Gameboard.gameBoard[1] == 'o' && Gameboard.gameBoard[4] == 'o' && Gameboard.gameBoard[7] == 'o'){
                    console.log('player 2 wins');
                } else if(Gameboard.gameBoard[2] == 'o' && Gameboard.gameBoard[5] == 'o' && Gameboard.gameBoard[8] == 'o'){
                    console.log('player 2 wins');
                } else if(Gameboard.gameBoard[0] == 'o' && Gameboard.gameBoard[4] == 'o' && Gameboard.gameBoard[8] == 'o'){
                    console.log('player 2 wins');
                } else if(Gameboard.gameBoard[2] == 'o' && Gameboard.gameBoard[4] == 'o' && Gameboard.gameBoard[6] == 'o'){
                    console.log('player 2 wins');
                }
            })
        });


        // const tie = document.getElementById('gameboard');

        // tie.addEventListener('click', function(){
        //     if (row1Array.length == 3 && row2Array.length == 3 && row3Array.length == 3 && column1Array.length == 3 && column2Array.length == 3 && column3Array.length == 3 && diagonal1Array.length == 3 && diagonal2Array.length == 3 && tieGame(row1Array) && tieGame(row2Array) && tieGame(row3Array) && tieGame(column1Array) && tieGame(column2Array) && tieGame(column3Array) && tieGame(diagonal1Array) && tieGame(diagonal2Array)){
        //         console.log("Tie Game");
        //     }
        // });

        
        return { gameCell, };
    })();

    return { Gameboard,
             player,
             displayController,
             playerA,
             playerB,
            }

})();