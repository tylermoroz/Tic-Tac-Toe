const gameModule = (() => {

    const Gameboard = (() => {
        const gameBoard = ['x','o','x','o','x'];
        return { gameBoard };
    })();

    const displayController = (() => {

        return { };
    })();

    const player = (name) => {
        return { name };
    }

    return { Gameboard,
             player,
             displayController,
            }

})();