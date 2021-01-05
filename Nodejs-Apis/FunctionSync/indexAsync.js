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
                nome: 'Ivan Zichtl',
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
main()
async function main() {
    try{
        console.time(`medida-promisse`)
        const usuario = await getUser()
        const resultado = await Promise.all([
            getPhone(usuario.id),
            getAdressAsync(usuario.id)
            
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]
        console.log(
            `Usuário:
             Id: ${usuario.id}
             Nome: ${usuario.nome}
             Telefone: (${telefone.ddd})-${telefone.telefone}
             Endereço: ${endereco.adressType} ${endereco.adress}, ${endereco.adressNumber}
            `)
        console.timeEnd(`medida-promisse`)
    } catch (error){
        console.error('Deu ruim', error)
    }
        
}



