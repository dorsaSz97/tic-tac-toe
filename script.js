'use strict';

const markO = 'o';
const markX = 'x';

let humanPlayer;
let cpuPlayer;
let originalBoard;

const startSection = document.querySelector('.start-section');
const gameSection = document.querySelector('.start-section');
const finishSection = document.querySelector('.start-section');
const boardEl = document.querySelector('.board');
const humanScoreContainer = document.querySelector('.score-container.human');
const humanScore = document.querySelector('.score-container.human .score');
const cpuScoreContainer = document.querySelector('.score-container.cpu');
const cpuScore = document.querySelector('.score-container.cpu .score');

let hscore = 0;
let cscore = 0;

document.querySelector('.marks').addEventListener('click', e => {
  const clickedMark = e.target.closest('button');

  if (clickedMark.classList.contains('mark--x')) {
    humanScoreContainer.style.backgroundColor = 'rgba(196, 82, 85, 0.5)';
    cpuScoreContainer.style.backgroundColor = 'rgba(158, 212, 161, 0.565)';
    humanPlayer = markX;
    cpuPlayer = markO;
    closeSection(startSection);
    // boardEl.classList.add(humanPlayer)
  } else if (clickedMark.classList.contains('mark--o')) {
    cpuScoreContainer.style.backgroundColor = 'rgba(196, 82, 85, 0.5)';
    humanScoreContainer.style.backgroundColor = 'rgba(158, 212, 161, 0.565)';
    humanPlayer = markO;
    cpuPlayer = markX;
    closeSection(startSection);
  }

  // boardEl.classList.add(humanPlayer)
  init();
});

////////
// Closes any given section
function closeSection(section) {
  section.classList.add('hide');
  section.addEventListener(
    'animationend',
    () => (section.style.display = 'none'),
    { once: true }
  );
}
////////

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cellEls = document.querySelectorAll('.cell');
init();
// TODO: Call init() when the retry button is clicked

function init() {
  // TODO: Hide the result section
  boardEl.classList.remove(humanPlayer);
  boardEl.classList.remove(cpuPlayer);

  document.querySelector('.end-section').style.display = 'none';
  originalBoard = Array.from({ length: 9 }, (_, i) => i);

  cellEls.forEach((cellEl, cellIndex) => {
    cellEl.style.backgroundColor = 'transparent';
    cellEl.classList.remove(markO);
    cellEl.classList.remove(markX);
    if (humanPlayer === markX) {
      boardEl.classList.add(humanPlayer);
      cellEl.addEventListener('click', handleCellPick.bind(cellIndex), {
        once: true,
      });
    }
  });
  if (humanPlayer === markO) {
    setTimeout(() => {
      boardEl.classList.remove(humanPlayer);
      showTic(bestMove(), cpuPlayer);
      boardEl.classList.add(humanPlayer);
    }, 200);
    cellEls.forEach((cellEl, cellIndex) => {
      cellEl.addEventListener('click', handleCellPick.bind(cellIndex), {
        once: true,
      });
    });
  }
}

function handleCellPick() {
  if (humanPlayer === markO) {
    if (typeof originalBoard[this] == 'number') {
      showTic(this, humanPlayer);

      if (isDraw()) {
        return;
      }
      if (!checkWinner(originalBoard, humanPlayer) || !isDraw()) {
        setTimeout(() => {
          boardEl.classList.remove(humanPlayer);
          showTic(bestMove(), cpuPlayer);
          boardEl.classList.add(humanPlayer);
        }, 1000);
      }
    }
  }
  if (humanPlayer === markX) {
    if (typeof originalBoard[this] == 'number') {
      showTic(this, humanPlayer);

      if (isDraw()) {
        return;
      }
      if (!checkWinner(originalBoard, humanPlayer) || !isDraw()) {
        setTimeout(() => {
          boardEl.classList.remove(humanPlayer);
          showTic(bestMove(), cpuPlayer);
          boardEl.classList.add(humanPlayer);
        }, 1000);
      }
    }
  }
}

function showTic(cellId, player) {
  originalBoard[cellId] = player;
  cellEls[cellId].classList.add(player);
  setTimeout(() => {
    boardEl.classList.add(humanPlayer);
  }, 100);
  let playerWon = checkWinner(originalBoard, player);
  if (playerWon) finishGame(playerWon);
  isDraw();
}

function checkWinner(board, player) {
  let playerCombos = board.reduce(
    (acc, combo, index) => (combo === player ? acc.concat(index) : acc),
    []
  ); // ex: [2,3,4]
  let playerWon = null;

  for (let [index, win] of winningCombinations.entries()) {
    if (win.every(elem => playerCombos.indexOf(elem) > -1)) {
      playerWon = { index: index, player: player };
      break;
    }
  }

  // console.log(playerWon);

  return playerWon;

  // return winningCombinations.some(winningCombination => {
  //   return winningCombination.every(winCell =>
  //     cellEls[winCell].classList.contains(player)
  //   );
  // });
}

function finishGame(playerWon) {
  // TODO: Make the cells unclickable
  const winnerColor =
    playerWon.player === markO
      ? 'rgba(158, 212, 161, 0.365)'
      : 'rgba(196, 82, 85, 0.3)';
  winningCombinations[playerWon.index].forEach(cell => {
    cellEls[cell].style.backgroundColor = winnerColor;
  });

  if (playerWon.player === humanPlayer) {
    hscore++;
    humanScore.innerHTML = hscore;

    playerWon.player === humanPlayer
      ? (document.querySelector('.end-section .message').innerHTML = 'YOU WON!')
      : (document.querySelector('.end-section .message').innerHTML =
          'CPU WON!');
    setTimeout(() => {
      document.querySelector('.end-section').style.display = 'flex';
    }, 800);
  } else if (playerWon?.player === cpuPlayer) {
    cscore++;
    cpuScore.innerHTML = cscore;
    playerWon.player === humanPlayer
      ? (document.querySelector('.end-section .message').innerHTML = 'YOU WON!')
      : (document.querySelector('.end-section .message').innerHTML =
          'CPU WON!');
    setTimeout(() => {
      document.querySelector('.end-section').style.display = 'flex';
    }, 800);
  }

  // setTimeout(() => {
  //   init();
  // }, 2000);

  console.log(playerWon);
}

function emptyCells() {
  return [...originalBoard].filter(cell => typeof cell == 'number');
}
document.querySelector('.btn-retry').addEventListener('click', () => {
  init();
});

function isDraw() {
  if (emptyCells().length == 0) {
    document.querySelector('.end-section .message').innerHTML = 'Its a draw';
    document.querySelector('.end-section').style.display = 'flex';

    return true;
    // TODO: Send the message of who the winner is and ++ the score
  }

  return false;
}

function bestMove() {
  return minimax(originalBoard, cpuPlayer).index;
}

function minimax(newBoard, player) {
  let availableCells = emptyCells();

  if (checkWinner(newBoard, humanPlayer)) {
    return { score: -10 };
  } else if (checkWinner(newBoard, cpuPlayer)) {
    return { score: 10 };
  } else if (availableCells.length === 0) {
    return { score: 0 };
  }

  let moves = [];
  for (let i = 0; i < availableCells.length; i++) {
    let move = {};
    move.index = newBoard[availableCells[i]];
    newBoard[availableCells[i]] = player;

    if (player == cpuPlayer) {
      let result = minimax(newBoard, humanPlayer);
      move.score = result.score;
    } else {
      let result = minimax(newBoard, cpuPlayer);
      move.score = result.score;
    }

    newBoard[availableCells[i]] = move.index;

    moves.push(move);
  }
  // availableCells.forEach((availCell, i) => {
  //   let move = {};
  //   move.index = newBoard[availableCells[i]];
  //   newBoard[availCell[i]] = player;
  //   if (player === cpuPlayer) {
  //     let result = minimax(newBoard, humanPlayer);
  //     move.score = result.score;
  //   } else {
  //     let result = minimax(newBoard, cpuPlayer);
  //     move.score = result.score;
  //   }

  //   newBoard[availableCells[i]] = move.index;
  //   moves.push(move);
  // });

  let bestMove;
  if (player === cpuPlayer) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}
