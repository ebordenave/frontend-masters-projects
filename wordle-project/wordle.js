let currentId = 0

const handleKeyboardKeydown = (e) => {
  // format to the keydown to always be Uppercase
  const keydownEventValue = e.key.toUpperCase()

  // if key is 1 letter
  if (e.key.length === 1) {

    // declare a div and a corresponding ID to a variable
    const div = document.getElementById(`${currentId}`)

    // if div exists and the div class contains wordleBox
    if (div && div.classList.contains("wordleBox")) {

      // the text content will equal the keydowneventvalue

      div.textContent = keydownEventValue
      // the text content will equal the keydowneventvalue
      currentId += 1
    }

  }

  if (keydownEventValue === "ENTER") {
    console.log("submitting Guess")
  }
}

document.body.addEventListener("keydown",handleKeyboardKeydown)

const onscreenKeyboard = document.getElementById("keyboardButtonSection")

const handleOnscreenKeyboardClick = (e) => {
  if (e.target.tagName === "BUTTON"){
    document.getElementById(`${currentId}`).innerHTML= e.target.textContent
    currentId += 1
  }
}

onscreenKeyboard.addEventListener("click",handleOnscreenKeyboardClick)

const createWordleBoxIdNumbers = () => {
  const wordleBoxes = document.querySelectorAll(".wordleBox")

  wordleBoxes.forEach((box,index)=> {
    box.id = `${index}`
  })
}
createWordleBoxIdNumbers()


