const Letter = function (char) {
  this.char = char
  this.guess = false
  this.verify = function () {
    if (this.guess === true) {
      return this.char
    } else {
      return '_'
    }
  }
  this.confirm = function (arg) {
    if (this.char === arg) {
      this.guess = true
      return true
    }
  }
}

module.exports = Letter




