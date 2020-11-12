const { lista, html } = require('./base.js')



const regExp2 = /<.+?>.+?<\/.+?>/gi

if (regExp2){
    console.log(html.match(regExp2))
    console.log(html.match(regExp2)[0])
    console.log(html.match(regExp2)[1])
    console.log(html.match(regExp2)[2])
    console.log(html.match(regExp2)[3])
    console.log(html.match(regExp2)[4])

} else console.log('Não existe no texto')