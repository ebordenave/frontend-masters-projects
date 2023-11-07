let currentRowId = 0;
let currentColumnId = 0;

const handleKeyboardKeydown = (e) => {
  const keydownEventValue = e.key.toUpperCase();

  if (e.key.length === 1) {
    const div = document.getElementById(
      `row=${currentRowId}-column=${currentColumnId}`,
    );

    if (div && div.classList.contains("wordleBox")) {
      div.textContent = keydownEventValue;
    }
    currentColumnId += 1;
  }
  if (currentColumnId % 6 === 5) {
    currentRowId += 1;
    currentColumnId = 0;
  }

  if (keydownEventValue === "ENTER") {
    console.log("submitting Guess");
  }
  console.log(currentRowId, currentColumnId);
};

document.body.addEventListener("keydown", handleKeyboardKeydown);

const onscreenKeyboard = document.getElementById("keyboardButtonSection");

const handleOnscreenKeyboardClick = (e) => {
  if (e.target.tagName === "BUTTON") {
    document.getElementById(
      `row=${currentRowId}-column=${currentColumnId}`,
    ).innerHTML = e.target.textContent;
  }
  currentColumnId += 1;
  if (currentColumnId % 6 === 5) {
    currentRowId += 1;
    currentColumnId = 0;
  }
  console.log(currentRowId, currentColumnId);
};

onscreenKeyboard.addEventListener("click", handleOnscreenKeyboardClick);

const generateBoxIdNumbers = () => {
  const wordleBoxes = document.querySelectorAll(".wordleBox");

  wordleBoxes.forEach((box, index) => {
    const rowIndex = Math.floor(index / 5);
    const columnIndex = index % 5;
    box.id = `row=${rowIndex}-column=${columnIndex}`;
  });
};

generateBoxIdNumbers();
