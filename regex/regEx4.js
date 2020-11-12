const { alfabeto, texto} = require('./base.js')



const regExp2 = /[a1]+/gi
const regExp3 = /\w+/gi

if (regExp2){
    console.log(alfabeto.match(regExp2))
    console.log(texto.match(regExp3))
  

} else console.log('Não existe no texto')