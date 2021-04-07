// import chalk
const chalk = require('chalk')

// récupérer mot au hasard
const { Word } = require('./word')
const word = Word()

// Message d'accueil
const intro = `Hi there, try to find the hidden word: \n\n\n`
// affichage lettres restantes a deviner
let wordSecret = '_'.repeat(word.length)
console.log(intro)

//affichage msg bonne/mauvaise reponse
const { Answer } = require('./strings')

//affichage du dessin 
const { steps } = require('./steps')
let fails = 0
let isRunning = true

// Gestion des erreurs



while (isRunning) {
  // interaction utilisateur
  console.log(wordSecret)
  const readlineSync = require('readline-sync')
  let letter = '£'
  while (letter.charCodeAt(0) > 90 || letter.charCodeAt(0) < 65 || letter === '') {
    letter = readlineSync.question('Please suggest a letter: ').toUpperCase()
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
    console.log(Answer('good'))
  } else {
    console.log(Answer('bad'))
    fails += 1
    console.log(steps[fails])
  }
  if (fails === 10) {
    console.log('Game Over')
    isRunning = false
  } else if (wordSecret === word) {
    console.log('You win')
    isRunning = false
  }
}
