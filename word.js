// read dict.txt pour extraire un mot
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

const word = () => {
  const txt = readFileSync('./dict.txt', 'utf-8').split(`\n`)
  const n = randomInt(0, txt.length)
  return txt[n]
}

exports.word = word