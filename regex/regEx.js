const { texto } = require('./base.js')

const regExp = /(maria|joão|luiz)(, hoje sua esposa)/gi
const regExp1 = /(João)/gi
const found = regExp.exec(texto)
const found1 = regExp1.match(texto)

if (found){
console.log(found1[0])
} else console.log('Null')