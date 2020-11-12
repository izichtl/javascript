const { cpfs, cpfs2, ips } = require('./base.js')



// const regExp = /\S+/gi
// const regExp1 = /\d+\.\d+\.\d+-\d{2}/gi
// const regExp2 = /\d{3}\.\d{3}\.\d{3}-\d{2}/gi
// const regExp3 = /(\d{3}\.){2}\d{3}-\d{2}/gi
const regExpIp =/\S+/gi

if (regExpIp){
   
    // console.log(cpfs.match(regExp))
    // console.log(cpfs.match(regExp1))
    // console.log(cpfs.match(regExp2))
    // console.log(cpfs.match(regExp3))
    console.log(ips.match(regExpIp))
    console.log(regExpIp.exec(ips))
  

} else console.log('Não existe no texto')