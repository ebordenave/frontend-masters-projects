
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
  const expression = array.join(' ')

  const evaluateArray = new Function(`return ${expression}`);
  const result = evaluateArray();
  console.log (result)
}

const pushItemsIntoThisArray = (array) => {
  handleMath(array)
}



pushItemsIntoThisArray([10,"+", 3,])

