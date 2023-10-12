
const handleKeyboardKeydown = (e) => {
  const keydownEventValue = e.key.toUpperCase()

  console.log(`${keydownEventValue}`)

  // if Enter was pressed AND guessed word is a valid word (define valid word)
  // then submit guess
  if (keydownEventValue === "ENTER") {
    console.log("enter was pressed")
  }
}
document.body.addEventListener("keydown",handleKeyboardKeydown)

const onscreenKeyboard = document.getElementById("keyboardButtonSection")

const handleOnscreenKeyboardClick = (e) => {
  if (e.target.tagName === "BUTTON"){
    console.log(`${e.target.textContent}`)
  }
}

onscreenKeyboard.addEventListener("click",handleOnscreenKeyboardClick)

