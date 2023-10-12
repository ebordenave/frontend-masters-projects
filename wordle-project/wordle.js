let textarea = document.getElementById("test-target")


textarea.addEventListener("input", (e) => {
  console.log(e.data.toUpperCase());
});

document.addEventListener("DOMContentLoaded", function () {
  let handleButtonClick = document.getElementById("keyboardButtonSection");

  handleButtonClick.addEventListener("click", (e) =>{
    if (e.target.tagName === "BUTTON") {
      console.log(`${e.target.textContent}`)
    }
  })
})





