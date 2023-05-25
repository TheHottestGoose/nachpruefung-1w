import {print, exercise} from "./utils.js"

exercise("Merge", function() {
  let sum = 0
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  print("Summe: " + sum)
})