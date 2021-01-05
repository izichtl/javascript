/* 

1 Obter Usuário 
2 Obter Telefone a partir do Id do usuário 
3 Obter o endereço a partir do Id do usuário

*/ 

function getUser(callback) {
    setTimeout(()=>{
        return callback(null, {
            id: 1,
            nome: 'Jaspion',
            nascimento: new Date()
        })
    }, 1000)

}

function getPhone(idUser, callback) {
    setTimeout( () => {
        return callback(null, {
            telefone: '98260-8223',
            ddd:21
        })
    }, 2000)
}

function getAdress(idUser, callback){
    setTimeout( ()=> {
        return callback(null, {
            adressType: 'Rua',
            adress: 'Oscar Soares',
            adressNumber: 161
        })
    }, 2000)

}


getUser(function doUser(error, user){
    //null | "" | 0 === false
    if(error){
        console.error('Deu ruim em usuário', error)
        return;
    }
        getPhone(user.id, function doPhone(error1, phone){
            if(error1) {
                console.error('Deum ruim em telefone', error)
                return;
            }
            getAdress(user.id, function doAdress(error2, adress){
                if(error2){
                    console.error('Deu rui em Endereço', erro)
                    return;
                }
                
            console.log(`
                Nome: ${user.nome},
                Telefone: ${phone.ddd}-${phone.telefone},
                Endereço: ${adress.adressType} ${adress.adress}, ${adress.adressNumber}
                `)
        })
    })
})
//const phone = getPhone(user.id)	
//console.log('Phone User', phone)