'use strict';

// putting marks on every cell we click
// cellElements.forEach(cell => {
//   cell.addEventListener(
//     'click',
//     e => {
//       e.target.classList.add(currentPlayer);
//       if (checkWinner(currentPlayer)) {
//         // someone won
//         // end the game plus message and score
//         console.log(`${currentPlayer} is the winner`);

//         // reset the game
//         setTimeout(() => {
//           currentPlayer = markX;

//           cellElements.forEach(cell => {
//             cell.classList.remove(markO);
//             cell.classList.remove(markX);
//             cell.addEventListener(
//               'click',
//               e => {
//                 e.target.classList.add(currentPlayer);
//               },
//               { once: true }
//             );
//           });
//         }, 1500);
//       } else if (isDraw()) {
//         // its a draw
//         // end the game plus message nad score
//       } else {
//         console.log('hi');
//         // switch plyers
//         currentPlayer = currentPlayer === markX ? markO : markX;

//         // computer's choice
//         let computerChoiceIndex = Array.from(cellElements).filter(
//           cell =>
//             !cell.classList.contains(markO) && !cell.classList.contains(markX)
//         )[
//           Math.floor(
//             Math.random() *
//               Array.from(cellElements).filter(
//                 cell =>
//                   !cell.classList.contains(markO) &&
//                   !cell.classList.contains(markX)
//               ).length
//           )
//         ];
//         computerChoiceIndex.classList.add(currentPlayer);

//         if (checkWinner(currentPlayer)) {
//           // someone won
//           // end the game plus message and score
//           console.log(`${currentPlayer} is the winner`);

//           // reset the game
//           setTimeout(() => {
//             currentPlayer = markX;

//             cellElements.forEach(cell => {
//               cell.classList.remove(markO);
//               cell.classList.remove(markX);
//               cell.addEventListener(
//                 'click',
//                 e => {
//                   e.target.classList.add(currentPlayer);
//                 },
//                 { once: true }
//               );
//             });
//           }, 1500);
//         } else if (isDraw()) {
//           // its a draw
//           // end the game plus message nad score
//           console.log('draw');
//         } else {
//           console.log('hi');
//           // switch plyers
//           currentPlayer = currentPlayer === markX ? markO : markX;
//         }

//         // currentPlayer = currentPlayer === markX ? markO : markX;
//       }
//     },
//     { once: true }
//   );
// });

// console.log(computerChoiceIndex);
// if the player clicks on x => humanPlayer = x
// human starts first (getting their choice)
// cells.forEach(cell => {
//   if (!cell.classList.contains('x') && !cell.classList.contains('o')) {
//     cell.addEventListener('click', playHandler, { once: true });
//   }
// });

// const markO = 'o';
// const markX = 'x';
// const winningCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// let humanTicChoice;
// let computerTicChoice;
// let currentPlayer;
// let board;
// const cellElements = document.querySelectorAll('.cell');

// document.querySelector('.choices').addEventListener('click', e => {
//   createBoard();
//   if (e.target.classList.contains('btn-x')) {
//     humanTicChoice = markX;
//     computerTicChoice = markO;
//     currentPlayer = humanTicChoice;
//     console.log('you are x');
//     logic();
//   } else if (e.target.classList.contains('btn-o')) {
//     humanTicChoice = markO;
//     computerTicChoice = markX;
//     currentPlayer = computerTicChoice;
//     console.log('you are o');
//     logic();
//   }

//   document.querySelector('.choices').style.display = 'none';
// });
// let computerCellChoice;

// function logic() {
//   // console.log(currentPlayer, humanTicChoice, computerTicChoice);
//   if (currentPlayer === humanTicChoice) {
//     // human is x and its their turn
//     cellElements.forEach(cellEl => {
//       cellEl.addEventListener('click', e => {
//         if (
//           !cellEl.classList.contains(humanTicChoice) &&
//           !cellEl.classList.contains(computerTicChoice)
//         ) {
//           e.target.closest('.cell').classList.add(humanTicChoice);
//           createBoard();

//           currentPlayer = computerTicChoice;
//           checkState(humanTicChoice, computerTicChoice);
//         }
//       });
//     });
//   } else if (currentPlayer === computerTicChoice) {
//     chooseBestMove();
//     // const emptyCells = Array.from(cellElements).filter(
//     //   cell =>
//     //     !cell.classList.contains(humanTicChoice) &&
//     //     !cell.classList.contains(computerTicChoice)
//     // );

//     // computerCellChoice =
//     //   emptyCells[Math.floor(Math.random() * emptyCells.length)];
//   }
// }
// function checkState(curr, opp) {
//   if (checkWinner(curr)) {
//     console.log('won');
//     // RESET
//     // setTimeout(() => {
//     //   currentPlayer = markX;
//     //   cellElements.forEach(cell => {
//     //     cell.classList.remove(markO);
//     //     cell.classList.remove(markX);
//     //     cell.addEventListener(
//     //       'click',
//     //       e => {
//     //         e.target.classList.add(currentPlayer);
//     //       },
//     //       { once: true }
//     //     );
//     //   });
//     // }, 1500);
//     // document.querySelector('.board').style.display = 'none';
//   } else if (isDraw()) {
//     // RESET
//     console.log('draw');
//   } else {
//     // SWITCH

//     logic();
//   }
// }
// function checkWinner(currclass) {
//   return winningCombinations.some(combo => {
//     return combo.every(index =>
//       cellElements[index].classList.contains(currclass)
//     );
//   });
// }

// function isDraw() {
//   Array.from(cellElements).every(
//     cell =>
//       cell.classList.contains(computerTicChoice) ||
//       cell.classList.contains(humanTicChoice)
//   );
// }

// function createBoard() {
//   board = [];
//   cellElements.forEach(cellEl => {
//     if (cellEl.classList.contains(computerTicChoice)) {
//       board.push(computerTicChoice);
//     }
//     if (cellEl.classList.contains(humanTicChoice)) {
//       board.push(humanTicChoice);
//     }
//     if (
//       !cellEl.classList.contains(humanTicChoice) &&
//       !cellEl.classList.contains(computerTicChoice)
//     ) {
//       board.push('');
//     }
//   });
//   return board;
// }

// console.log(board);
// function chooseBestMove() {
//   let bestScore = -Infinity;
//   let bestMove;
//   // let isMax = computerTicChoice === markO

//   board.forEach((cell, i) => {
//     if (cell === '') {
//       cell = computerTicChoice;
//       let score = minimax(board, 0, false);
//       cell = '';
//       if (score > bestScore) {
//         console.log(score);
//         bestScore = score;
//         bestMove = i;
//       }
//     }
//   });
//   console.log(bestMove);
//   cellElements[bestMove].classList.add(computerTicChoice);
//   createBoard();
//   currentPlayer = humanTicChoice;
//   checkState(computerTicChoice, humanTicChoice);
// }

// function minimax(board, depth, isMaximizing) {
//   // if anyone has won
//   // console.log(board, depth, isMaximizing);
//   // let score;
//   const wonX = winningCombinations.some(combo => {
//     combo.every(index => board[index] === markX);
//   });
//   const wonO = winningCombinations.some(combo => {
//     combo.every(index => board[index] === markO);
//   });

//   if (wonO) {
//     // score = -1;
//     console.log('won');
//     return -1;
//   } else if (wonX) {
//     console.log('won');
//     // score = 1;
//     return 1;
//   } else if (isDraw()) {
//     console.log('draw');
//     // score = 0;
//     return 0;
//   }

//   if (isMaximizing) {
//     let bestScore = -Infinity;
//     board.forEach((cell, i) => {
//       if (cell === '') {
//         cell = computerTicChoice;
//         let score = minimax(board, depth + 1, false);
//         cell = '';
//         if (score > bestScore) {
//           bestScore = score;
//           // bestMove = i;
//         }
//       }
//     });
//     // console.log(bestScore);
//     return bestScore;
//   } else {
//     let bestScore = Infinity;
//     board.forEach((cell, i) => {
//       if (cell === '') {
//         cell = humanTicChoice;
//         let score = minimax(board, depth + 1, true);
//         cell = '';
//         if (score < bestScore) {
//           // console.log(score);
//           bestScore = score;
//           // bestMove = i;
//         }
//       }
//     });
//     // console.log(bestScore);
//     return bestScore;
//   }
// }

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
