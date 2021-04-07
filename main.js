// import chalk
const chalk = require('chalk')

// récupérer mot au hasard
const { Word } = require('./word')
const word = Word()

// Message d'accueil
const intro = `Hi there, try to find the hidden word: \n\n\n`
// affichage lettres restantes a deviner
let wordSecret = '_'.repeat(word.length)
console.log(chalk.yellow(intro))

//affichage msg bonne/mauvaise reponse
const { Answer } = require('./strings')

//affichage du dessin 
const { steps } = require('./steps')
let fails = 0
let isRunning = true

// Gestion des erreurs



while (isRunning) {
  // interaction utilisateur
  console.log(chalk.yellow(wordSecret))
  const readlineSync = require('readline-sync')
  let letter = '£'
  while (letter.charCodeAt(0) > 90 || letter.charCodeAt(0) < 65 || letter === '') {
    letter = readlineSync.question(chalk.yellow('Please suggest a letter: ')).toUpperCase()
  }

  let wordProgress = ''

  if (word.includes(letter)) {
    for (i = 0; i < word.length; ++i) {
      if (word[i] === letter) {
        wordProgress += letter
      } else if (word[i] === wordSecret[i]) {
        wordProgress += word[i]
      } else {
        wordProgress += '_'
      }
    }
    wordSecret = wordProgress
    console.log(chalk.green(Answer('good')))
    console.log(chalk.bold.blue(steps[fails]))
  } else {
    console.log(chalk.red(Answer('bad')))
    fails += 1
    console.log(chalk.bold.blue(steps[fails]))
  }
  if (fails === 9) {
    console.log(chalk.bold.red('! GAME OVER !'))
    isRunning = false
  } else if (wordSecret === word) {
    console.log(chalk.bold.yellow(word))
    console.log(chalk.bold.green('YOU WIN !!!'))
    isRunning = false
  }
}