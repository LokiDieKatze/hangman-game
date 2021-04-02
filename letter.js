const readlineSync = require('readline-sync')

const letter = readlineSync.question('Please suggest a letter: ').toUpperCase()

exports.letter = letter