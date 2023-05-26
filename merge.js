import {read, print, exercise} from "./utils.js"

// Gib die Zahl an der Stelle i zurück
function numAt(numbers, i) {
  return numbers[i]
}

function createNumbers(start, stop, step) {
  let res = []
  for (let i = start; i < stop; i+=step) {
    res.push(i)
  }
  return res
}

function parseInput() {
  let arr = read().split(" ")
  let start = 0
  let stop = 1
  let step = 1
  if (arr.length > 0 && read().length > 0) {
    stop = parseInt(arr[0])
  }
  if (arr.length > 1) {
    start = parseInt(arr[0])
    stop = parseInt(arr[1])
  }
  if (arr.length > 2) {
    step = parseInt(arr[2])
  }
  return { start, stop, step }
}

function calcSum(numbers) {
  return numbers.reduce((a, b) => a + b)
}


exercise("Merge", function() {
  let {start, stop , step} = parseInput()
  let numbers = createNumbers(start, stop, step)
  let sum = calcSum(numbers)

  print("Summe: " + sum)
})