const BOARD_ID = 'board';
const BOARD_DIMENSION = 3;
const CELL = 'cell';
const IMG_DIR = '/img'
let isXNext = true;

const checkCells = (...cells) => {
    let cellsContent = cells.map(cell => {
        // extracting image node from cell
        cellImg = cell.firstElementChild;
        // check and return a move that was played in this cell, if none return NULL
        // image source is of the format : /img/{x || o}.png
        if (cellImg) {
            return cell.classList.contains('x') ? 'x' : 'o';
        } else  {
            return null;
        }
    });
    if (cellsContent[0]) {
        for (let i = 0; i < cellsContent.length; i++) {
            if (cellsContent[i] !== cellsContent[0]) return false;
        }
    } else return false;
    cells.forEach(cell => {
        cell.classList.add('winner');
    });
    return true;
}

const checkRows = board => {
    for (let i = 1; i <= BOARD_DIMENSION; i++ ) {
        var row = document.getElementById(`row ${i}`);
        let cells = [];
        // extracting cells from row ( row has whitespace elements due to styling )
        for (let key of row.childNodes.keys()) {
            if (key % 2) cells.push(row.childNodes[key])
        }
        if (checkCells(...cells)) {
            return true;
        }
    }
    return false;
}

const checkColumns = board => {

}

const checkDiags = board => {

}

const checkWinner = board => console.log(checkRows(board) || checkColumns(board) || checkDiags(board));

const toggleMove = cellId => {
    let board = document.getElementById(BOARD_ID);
    let cell = document.getElementById(cellId);
    if (!cell.hasChildNodes()) {
        let img = document.createElement('img');
        img.src = `${IMG_DIR}/${isXNext ? 'x' : 'o'}.png`;
        cell.classList.add(isXNext ? 'x' : 'o');
        isXNext = !isXNext;
        cell.appendChild(img);
        checkWinner(board);
    }
}