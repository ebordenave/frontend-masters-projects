let buffer = "0"
const display = document.querySelector('.display')
let userInputArray = []
// validate the user inputted number value, this will take either a number or a math symbol
const userInputValidator = (value) => {
  return isNaN(value) ? handleOperator(value) : handleNumber(value)
}

const handleNumber = (number) => {
  buffer === "0" ? buffer = number : buffer += number
}

const handleOperator = (operator) => {

  userInputArray.push(buffer)
  buffer = "0"
  switch (operator) {
    case 'C':
      buffer = "0"
      flushArray(userInputArray)
      rerender()
      break
    case '=':
      handleMath(userInputArray)
      flushArray(userInputArray)
      rerender()
      break
    case '÷':
      operator = "/"
      userInputArray.push(operator)
      break
    case 'x':
      operator = "*"
      userInputArray.push(operator)
      break
    case '-':
    case '+':
    case '%':
      userInputArray.push(operator)
      break

  }
}

const flushArray = (array) => {
  array.length = 0
}

const handleMath = (array) => {
  const expression = array.join(' ')
  const evaluateArray = new Function(`return ${expression}`);
  buffer = evaluateArray()
  console.log(userInputArray)
}

function buttonClick(value) {
  userInputValidator(value)
  rerender()
}

function init() {
  document
    .querySelector(".button-wrapper")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        buttonClick(event.target.innerText);
      }
    })
}

const rerender = () => {
  display.innerText = buffer
}

init()

// TODO: implement character limit in input and possibly font-size scaling
// TODO: AC button or C button. If Char is != 0, button symbol changes to C
// TODO: if event.target is a button, do button action, else do nothing