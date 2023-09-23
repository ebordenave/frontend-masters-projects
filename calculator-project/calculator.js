let buffer = "0"
const display = document.querySelector('.display')
const userInputArray = []
// validate the user inputted number value, this will take either a number or a math symbol
const userInputValidator = (value) => {
  return isNaN(value) ? handleOperator(value) : handleNumber(value)
  // return isNaN(value) ? console.log("symbol") : console.log("number")
}

const handleNumber = (number) => {
  buffer === "0" ? buffer = number : buffer += number
  console.log(buffer, userInputArray)
}

const handleOperator = (operator) => {
  buffer === "0" ? buffer = operator : buffer += operator
  userInputArray.push(buffer)
  console.log(buffer)
}

// const handleMath = (array) => {
//   //take each item in the resulting array and that will define the expression
//   const expression = array.join(' ')
//   //create an anonymous function that will evaluate the array properly using BODMAS
//   const evaluateArray = new Function(`return ${expression}`);
//   // assign this call to the result variable
//   const result = evaluateArray();
//   console.log(result)
// }

// const calculatorFunction = (array) => {
//   handleMath(array)
// }
//
//
// calculatorFunction([10, "+", 4,])

// let sampleUserInput;
//
// while (sampleUserInput !== '=') {
//   sampleUserInput = window.prompt("Enter Number or Operator");
// }

function buttonClick(value) {
  userInputValidator(value)
  rerender()
}

function init() {
  document
    .querySelector(".button-wrapper")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    })
}

const rerender = () => {
  display.innerText = buffer
}

init()

// TODO: implement character limit in input and possibly font-size scaling
// TODO: AC button or C button. If Char exists, button symbol changes to C
