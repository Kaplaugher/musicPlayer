// UI
import {
  createBoard,
  markTile,
  revealTile,
  TILE_STATUSES,
} from './minesweeper.js';

const BOARD_SIZE = 2;
const NUMBER_OF_MINES = 2;
const minesLeftText = document.querySelector('[data-mine-count]');

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
console.log(board);

const boardElement = document.querySelector('.board');

board.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.element);
    tile.element.addEventListener('click', () => {
      revealTile(board, tile);
    });
    tile.element.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      markTile(tile);
      listMinesLeft();
    });
  });
});

boardElement.style.setProperty('--size', BOARD_SIZE);
minesLeftText.textContent = NUMBER_OF_MINES;

function listMinesLeft() {
  const markedTilesCount = board.reduce((count, row) => {
    return (
      count + row.filter((tile) => tile.status === TILE_STATUSES.MARKED).length
    );
  }, 0);

  minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount;
}
