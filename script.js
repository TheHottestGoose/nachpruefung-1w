import { read, print, createButton } from "./utils.js"


createButton("Example", () => {
  let num = 11

  if (num < 10) {
    num = num + 5
  }

  print(num)
})