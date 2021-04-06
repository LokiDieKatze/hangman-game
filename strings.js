
// Good/bad messages


const { randomInt } = require('crypto')

const Answer = (props) => {
  const good = ['Good job!', 'Well done!', 'Yeah!', 'Perfect', 'Nice one!', 'Like a boss!']
  const bad = ['Oops', 'Oh no...', 'Try again', 'Not quite', 'Boo!']
  const n = randomInt(0, props.length)

  if (props === 'good') {
    return good[n]
  } else if (props === 'bad') {
    return bad[n]
  }

}

exports.Answer = Answer

