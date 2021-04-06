// read dict.txt pour extraire un mot
const { randomInt } = require('crypto')
const { readFileSync } = require('fs')

const Word = () => {
  const txt = readFileSync('./dict.txt', 'utf-8').split(`\n`)
  const n = randomInt(0, txt.length)
  return txt[n]
}

exports.Word = Word