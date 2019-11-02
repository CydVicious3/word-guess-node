const Letter = require('./letter')

const Word = function (word) {
  this.arrLetter = []
  this.build = function (word) {
    for (let i = 0; i < word.length; i++) {
      this.arrLetter.push(new Letter(word[i]))
    }
    console.log(this.arrLetter)
  }
  this.display = function () {
    let strTemp = ""
    for (let i = 0; i < this.arrLetter.length; i++) {
      let char = this.arrLetter[i].verify()
      strTemp += char
      //console.log(strTemp)
    }
    console.log(this.arrLetter)
    return strTemp
  }

  this.lookGuess = function (letter) {
    // loop the arr and for every letter pass the letter.guess(str)

    for (let i = 0; i < this.arrLetter.length; i++) {
      this.arrLetter[i].confirm(letter)

    }
  }

}

module.exports = Word