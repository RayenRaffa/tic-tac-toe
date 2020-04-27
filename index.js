const BOARD = 'board';
const CELL = 'cell';
const IMG_DIR = '/img'

let isXNext = true;

const toggleMove = cellId => {
    let cell = document.getElementById(cellId);
    if (!cell.hasChildNodes()) {
        let img = document.createElement('img');
        img.src = `${IMG_DIR}/${isXNext ? 'x' : 'o'}.png`;
        isXNext = !isXNext;
        cell.appendChild(img);
    }
}