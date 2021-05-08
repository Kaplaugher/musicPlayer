// UI
import { createBoard, markTile } from './minesweeper.js';

const BOARD_SIZE = 2;
const NUMBER_OF_MINES = 2;
const minesLeftText = document.querySelector('[data-mine-count]');

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
console.log(board);

const boardElement = document.querySelector('.board');
boardElement.style.setProperty('--size', BOARD_SIZE);
minesLeftText.textContent = NUMBER_OF_MINES;
board.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.element);
    tile.element.addEventListener('click', () => {});
    tile.element.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      markTile(tile.element);
    });
  });
});
