
window.addEventListener("keydown", (e) => {
  console.log(`${e.key.toUpperCase()}`)
//   logic for targeting innerHTML grid box here
})

window.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log(`${e.target.textContent}`)
  }
})





