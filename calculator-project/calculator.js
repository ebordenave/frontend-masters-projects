
let buffer = "0"
const userInputArray = []
// validate the user inputted number value, this will take either a number or a math symbol
const userInputValidator = (value) => {
  return isNaN(value) ? handleOperator(value) : handleNumber(value)
}


const handleNumber = (number) => {
  buffer === "0" ? buffer = number : buffer += number
  userInputArray.push(buffer)
  console.log(typeof buffer)
}
const handleOperator = (operator) => {
  buffer === "0" ? buffer = operator : buffer += operator
  userInputArray.push(buffer)
  console.log(typeof buffer)
}

const handleMath = (array) => {
  //take each item in the resulting array and that will define the expression
  const expression = array.join(' ')
  //create an anonymous function that will evaluate the array properly using BODMAS
  const evaluateArray = new Function(`return ${expression}`);
  // assign this call to the result variable
  const result = evaluateArray();
  console.log (result)
}

const calculatorFunction = (array) => {
  handleMath(array)
}



calculatorFunction([10,"+", 3,])

let sampleUserInput;

while (sampleUserInput !== '=') {
  sampleUserInput = window.prompt("Enter Number or Operator");
}