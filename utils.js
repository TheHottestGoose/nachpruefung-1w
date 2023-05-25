export const read = () => {
  return document.querySelector("#input").value
}

// Added a comment
export const print = (text) => {
  const output = document.querySelector("#output")
  output.textContent += "\n > " + text
  output.parentElement.scrollTo({
    top: output.scrollHeight,
    behavior: "smooth"
  })
}

export const exercise = (text, callback) => {
  console.log("Button created")
  const button = document.createElement("button")
  button.textContent = text
  button.addEventListener("click", callback)
  document.querySelector("#buttons").appendChild(button)
}

window.addEventListener("error", event => {
  print(`There is an error in *${event.filename.split("/").pop()}* at line ${event.lineno}`)
  print(event.message)
})
