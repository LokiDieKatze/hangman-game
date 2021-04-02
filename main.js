// import chalk
const chalk = require('chalk')

//import word
const { word } = require('./word')
const { letter } = require('./letter')

// affichage lettres restantes a deviner
let wordProgress = '_ '.repeat(word.length)
console.log(wordProgress)


// Game Loop
const { good, bad } = require('./strings.js')
const { steps } = require('./steps')

let fails = 0
const draw = steps[fails]


if (word.includes(`${letter}`)) {
  for (i = 0; i <= word.length; ++i) {
    if (word[i] === letter) {
      wordProgress += `${letter}`
    } else {
      wordProgress += '_ '
    }
    console.log(randomInt(0, good.length))
  }
} else {
  console.log(randomInt(0, bad.length))
  fails += 1

}
console.log(draw[fails])

// import dessins


