let container = document.querySelector("#container");
let row;
let cell;
let rowNumber = 6;
let cellNumber = 7;
let cellForEach;
let player = 1;
let winner= 0;

const CreateElement = () => {
  for (let i = 0; i < rowNumber; i++) {
    row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    for (let j = 0; j < cellNumber; j++) {
      cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.setAttribute("onclick", "Drawing(this)");
      row.appendChild(cell);
    }
  }
};

CreateElement();

function Drawing(elem) {
  cellForEach = [...document.getElementsByClassName("cell")];
  let index = cellForEach.indexOf(elem);
  if (player == 1 && cellForEach[index].style.backgroundColor != "red") {
    cellForEach[index].setAttribute("style", "background-color: yellow;");
    player++;
  } else if (
    player == 2 &&
    cellForEach[index].style.backgroundColor != "yellow"
  ) {
    cellForEach[index].setAttribute("style", "background-color: red;");
    player--;
  }
}

const interval = () => {
  let intervalPiece = setInterval(PlayGame, 100);
};

const clear = () => {
  clearInterval(interval)
}


function checkWin() {
  cellForEach = [...document.getElementsByClassName("cell")];
  for (let i = 0; i < cellForEach.length; i++) {
    if (
      ( cellForEach[i].style.backgroundColor == "red" &&
      cellForEach[i - (cellNumber + 1)] &&
        cellForEach[i - (cellNumber + 1)].style.backgroundColor == "red" &&
        cellForEach[i - (cellNumber + 1) * 2] &&
        cellForEach[i - (cellNumber + 1) * 2].style.backgroundColor == "red" &&
        cellForEach[i - (cellNumber + 1) * 3] &&
        cellForEach[i - (cellNumber + 1) * 3].style.backgroundColor == "red") 
        ||
      (cellForEach[i].style.backgroundColor == "red" &&
      cellForEach[i - (cellNumber - 1)] &&
        cellForEach[i - (cellNumber - 1)].style.backgroundColor == "red" &&
        cellForEach[i - (cellNumber - 1) * 2] &&
        cellForEach[i - (cellNumber - 1) * 2].style.backgroundColor == "red" &&
        cellForEach[i - (cellNumber - 1) * 3] &&
        cellForEach[i - (cellNumber - 1) * 3].style.backgroundColor == "red") 
        ||
      (cellForEach[i].style.backgroundColor == "red" &&
      cellForEach[i + 1] &&
        cellForEach[i + 1].style.backgroundColor == "red" &&
        cellForEach[i + 2] &&
        cellForEach[i + 2].style.backgroundColor == "red" &&
        cellForEach[i + 3]&&
        cellForEach[i + 3].style.backgroundColor == "red") 
        ||
      (cellForEach[i].style.backgroundColor == "red" &&
      cellForEach[i + cellNumber] &&
        cellForEach[i + cellNumber].style.backgroundColor == "red" &&
        cellForEach[i + cellNumber * 2] &&
        cellForEach[i + cellNumber * 2].style.backgroundColor == "red" &&
        cellForEach[i + cellNumber * 3] &&
        cellForEach[i + cellNumber * 3].style.backgroundColor == "red")
    ) {
      window.alert(`Le joueur ${player} a gagner .`)
      winner = 1
    } else if (
      (cellForEach[i].style.backgroundColor == "yellow" &&
      cellForEach[i - (cellNumber + 1)] &&
        cellForEach[i - (cellNumber + 1)].style.backgroundColor == "yellow" &&
        cellForEach[i - (cellNumber + 1) * 2] &&
        cellForEach[i - (cellNumber + 1) * 2].style.backgroundColor == "yellow" &&
        cellForEach[i - (cellNumber + 1) * 3] &&
        cellForEach[i - (cellNumber + 1) * 3].style.backgroundColor == "yellow") 
        ||
      (cellForEach[i].style.backgroundColor == "yellow" &&
      cellForEach[i - (cellNumber - 1)] &&
        cellForEach[i - (cellNumber - 1)].style.backgroundColor == "yellow" &&
        cellForEach[i - (cellNumber - 1) * 2]&&
        cellForEach[i - (cellNumber - 1) * 2].style.backgroundColor == "yellow" &&
        cellForEach[i - (cellNumber - 1) * 3]&&
        cellForEach[i - (cellNumber - 1) * 3].style.backgroundColor == "yellow") 
        ||
      (cellForEach[i].style.backgroundColor == "yellow" &&
      cellForEach[i + 1] &&
        cellForEach[i + 1].style.backgroundColor == "yellow" &&
        cellForEach[i + 2] &&
        cellForEach[i + 2].style.backgroundColor == "yellow" &&
        cellForEach[i + 3] &&
        cellForEach[i + 3].style.backgroundColor == "yellow") 
        ||
      (cellForEach[i].style.backgroundColor == "yellow" &&
      cellForEach[i + cellNumber] &&
        cellForEach[i + cellNumber].style.backgroundColor == "yellow" &&
        cellForEach[i + cellNumber * 2] &&
        cellForEach[i + cellNumber * 2].style.backgroundColor == "yellow" &&
        cellForEach[i + cellNumber * 3] &&
        cellForEach[i + cellNumber * 3].style.backgroundColor == "yellow")
    ) {
      window.alert(`Le joueur ${player} a gagner .`)
winner = 2
    }else if(winner == 1 || winner == 2){
      cellForEach.style.backgroundColor == "yellow"
    }
  }
}




function PlayGame() {
  for (let i = 0; i < cellForEach.length; i++) {
    if (
      cellForEach[i + cellNumber] &&
      cellForEach[i + cellNumber].style.backgroundColor != "yellow" &&
      cellForEach[i + cellNumber].style.backgroundColor != "red"
    ) {
      if (
        cellForEach[i] && 
        cellForEach[i].style.backgroundColor == "red" && i < 35) {
        cellForEach[i].setAttribute("style", "background-color: rgb(82, 82, 230);");
        cellForEach[i + cellNumber].setAttribute("style", "background-color: red;");
        break;
      } else if (
        cellForEach[i] &&
        cellForEach[i].style.backgroundColor == "yellow" && i < 35) {
        cellForEach[i].setAttribute(
          "style",
          "background-color: rgb(82, 82, 230);"
        );
        cellForEach[i + cellNumber].setAttribute(
          "style",
          "background-color: yellow;"
        );
        break;
      }else if (
        cellForEach[i + 1].style.backgroundColor == "red"
       ){
          checkWin()
      }
  }
  }
}
