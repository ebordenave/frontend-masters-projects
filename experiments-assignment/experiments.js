// const timesToRepeat = 10;

//TODO: write a loop that takes that character and repeats it that many times

const characterRepeater = (timesToRepeat, character) => {
  let num = 0;
  let res = ""
  while (num <= timesToRepeat) {
    res += character
    num += 1
  }
  console.log(res)
}

characterRepeater(10,character="🤖")
//testing