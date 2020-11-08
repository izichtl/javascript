

const input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`

const catchPhone = (_input) => {
    const regex = /[^\n]+/g
    let getArr = _input.match(regex)  
    let filterPhones = getArr.filter((item, i)=>{
        const regex = /([a-z]+\s+[0-9]+)/g

        return regex.test(item) 
    })
    let filterForTeste = getArr.filter((item, i)=>{
        const regex = /[a-z]+$/g

        return regex.test(item) 
    })
    
    let model = {}
    let phoneBook = filterPhones.map((item, i)=>{
        let regexName = /[a-z]+/gi 
        let regexPhone = /[0-9]+/gi 
        let name = item.match(regexName)
        let phone = item.match(regexPhone)
        model[name]=phone
        
    })
    
    filterForTeste.forEach(element => {
        let check = model[element]
        if(check){
            console.log(`${element}=${model[element]}`)
        }else{
            console.log('Not found')
        }
    });
    

}

console.log(catchPhone(input))