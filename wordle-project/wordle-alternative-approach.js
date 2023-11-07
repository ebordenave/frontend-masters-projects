const state = {
  currentColumn: 0,
  currentRow: 0,
  grid: Array(6)
    .fill("")
    .map(() => Array(5).fill("")),
};

function updatedGrid() {
  for (let i = 0; i < state.grid.length; i++) {
    for (let j = 0; j < state.grid[i].length; j++) {
      const box = document.getElementById(`box${i}${j}`);
      box.textContent = state.grid[i][j];
    }
  }
}

const drawBox = (container, row, col, letter = "") => {
  const box = document.createElement("div");
  box.className = "box";
  box.id = `box${row}${col}`;
  box.textContent = letter;

  container.appendChild(box);
  return box;
};

const drawGrid = (container) => {
  const grid = document.createElement("div");
  grid.className = "grid";

  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 5; column++) {
      drawBox(grid, row, column);
    }
  }
  container.appendChild(grid);
};

function registerKeyboardEvents() {
  document.body.onkeydown = (e) => {
    const key = e.key;
    if (key === "Enter") {
      if (state.currentColumn === 5) {
        const word = getCurrentWord();
        if (isWordValid(word)) {
          revealWord(word);
          state.currentRow++;
          state.currentCol = 0;
        }
      }
    }
    if (key === "Backspace") {
    }
    if (key === "Enter") {
    }

    updatedGrid();
  };
}
function startup() {
  const game = document.getElementById("game");
  drawGrid(game);

  // state.grid = Array(6)
  //   .fill()
  //   .map(() => Array(5).fill("A"));
  updatedGrid();
}

startup();
