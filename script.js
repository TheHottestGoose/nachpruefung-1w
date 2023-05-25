import { read, print, exercise } from "./utils.js"

// Um eine neue Aufgabe zu erstellen, kopieren Sie einfach
// die Zeilen bis zum nächsten Abschnitt, ein Button wird 
// automatisch erstellt.
// Ändern Sie "Beispiel" zu "Aufgabe #" und ändern Sie den
// Code in der Funktion so dass das gewünschte Resultat 
// herauskommt.
exercise("Beispiel", function() {
  let input = read()
  if (input.length > 0) {
    print(input)
  }
})





exercise("Aufgabe 2", function() {
  // Aufgabe 2 (b)
  // 
  let input = read().split("")

  // Aufgabe 2 (c)
  // 
  let res = []

  // Aufgabe 2 (d)
  // 
  for (let i = 0; i < input.length; i++) {

    // Aufgabe 2 (e)
    // 
    res.push(input[i].toUpperCase())
  }

  // Aufgabe 2 (f)
  // 
  print(res.join(""))
})