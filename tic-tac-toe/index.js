window.addEventListener("DOMContentLoaded", function () {

  //1 récupérer les cases
  let boxes = [];
  for (let i = 0; i < 9; i++) {
    boxes[i] = document.getElementById("box-" + i);
  }

  //2état du jeu
  let board = ["", "", "", "", "", "", "", "", ""];
  let gameOver = false;

  // 3) combinaisons gagnantes
  let wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  // 4 verify victoire
  function checkWin(symbol) {
    for (let i = 0; i < wins.length; i++) {
      let a = wins[i][0];
      let b = wins[i][1];
      let c = wins[i][2];

      if (board[a] === symbol &&
          board[b] === symbol &&
          board[c] === symbol) {
        return true;
      }
    }
    return false;
  }

  //5 verify egalite
  function checkDraw() {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        return false;
      }
    }
    return true;
  }

  // 6 coup de l'ordinateur
  function computerPlay() {
    let empty = [];

    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        empty.push(i);
      }
    }

    if (empty.length === 0) return;

    let random = Math.floor(Math.random() * empty.length);
    let index = empty[random];

    board[index] = "O";
    boxes[index].textContent = "O";

    if (checkWin("O")) {
      gameOver = true;
      window.alert("Defaite");
    } else if (checkDraw()) {
      gameOver = true;
      window.alert("Egalite");
    }
  }

  // 7) coup du joueur
  function playerPlay(index) {
    if (gameOver) return;
    if (board[index] !== "") return;

    board[index] = "X";
    boxes[index].textContent = "X";

    if (checkWin("X")) {
      gameOver = true;
      window.alert("Victoire");
      return;
    }

    if (checkDraw()) {
      gameOver = true;
      window.alert("Egalite");
      return;
    }

    computerPlay();
  }

  // 8) clic sur les cases
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
      playerPlay(i);
    });
  }

  // 9) bouton reset
  let reset = document.getElementById("reset");
  reset.addEventListener("click", function () {
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].textContent = "";
    }
  });

});