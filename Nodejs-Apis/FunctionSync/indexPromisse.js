/* 

1 Obter Usuário 
2 Obter Telefone a partir do Id do usuário 
3 Obter o endereço a partir do Id do usuário

*/ 
const util = require('util')
const getAdressAsync = util.promisify(getAdress)

function getUser() {

    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(()=>{
            //return reject(new Error('Reject Working'))
            return resolve({
                id: 01,
                nome: 'Jaspion',
                nascimento: new Date()
            })
        }, 1000)
    })
}

function getPhone(idUser){
    return new Promise (function resolvePromisse(resolve, reject){
        setTimeout( () => {
            return resolve({
                telefone: '98260-8223',
                ddd: 21
            })
        }, 2000)
    })
}

function getAdress(idUser, callback){
    
        setTimeout( ()=> {
            return callback(null,{
                adressType: 'Rua',
                adress: 'Oscar Soares',
                adressNumber: 161
            })
        }, 2000)
    
}
const userPromisse = getUser()
userPromisse
    .then( (usuario) => {
        return getPhone(usuario.id)
        .then (function doPhone(resultado){
            return {
                user: {
                    id: usuario.id,
                    nome: usuario.nome
                },
                telefone: resultado
            }
        } )
    })
    .then((resultado) => {
        const endereco = getAdressAsync(resultado.user.id)
        return endereco.then(function doAdress(resultadoAdress){
            return {
                user: resultado.user,
                telefone: resultado.telefone,
                endereco: resultadoAdress
            }
        })
    })
    .then((resultado) => {
        console.log(
            `Usuário:
             Id: ${resultado.user.id}
             Nome: ${resultado.user.nome}
             Telefone: (${resultado.telefone.ddd})-${resultado.telefone.telefone}
             Endereço: ${resultado.endereco.adressType} ${resultado.endereco.adress}, ${resultado.endereco.adressNumber}
            `)
    })
    .catch ((error) => {
        console.error('Deu erro em obter usuário', error)
    })

