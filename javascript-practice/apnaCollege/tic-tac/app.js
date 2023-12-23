let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newgamebtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let winnerMsg = document.querySelector(".msg");

let turnO = true; //playerX playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxs();
  msgContainer.classList.add("hide");
};

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableboxs = () => {
  for (let box of boxs) {
    box.disabled = true;
  }
};
const enableBoxs = () => {
  for (let box of boxs) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  winnerMsg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxs();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxs[pattern[0]].innerText;
    let pos2Val = boxs[pattern[1]].innerText;
    let pos3Val = boxs[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner!!", pos1Val);

        showWinner(pos1Val);
      }
    }
  }
};

newgamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
