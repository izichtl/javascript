const { lista } = require('./base.js')



const regExp2 = /\.(jpe?g|git)/g

if (regExp2){
for (const item of lista){
    console.log(item, item.match(regExp2))
}
} else console.log('Não existe no texto')