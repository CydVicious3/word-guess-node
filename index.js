const Word = require('./word')
const randomWords = require("random-words");

const word = "game"
let newW = new Word(word)
newW.build(word)

//
var dispW = newW.display()

console.log(dispW)


// ask with inquiere a letter   // push in array gueesed so far // attemps left  if attemp === 0 losses or if all the letters ara revealed win

// verify letter
const letter = "a"
newW.lookGuess(letter)

var dispW = newW.display()

console.log(dispW)