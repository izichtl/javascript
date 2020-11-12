
const { texto } = require('./base.js')


const regExp1 = /Jo*ão+|Luiz|Maria/gi

const tt = texto.match(regExp1)
if (tt){
console.log(tt)
// let felipe = texto.replace(/(João)(Maria)/gi, s$1s $2a)
// console.log(felipe)
// console.log(tt)

} else console.log('Não existe no texto')