const service = require('./service')
Array.prototype.meuMap = function (callback) {
    const novoArrayMaped = []
    for( let ii = 0 ; ii <= this.length -1 ; ii++) {
        const resultado = callback(this[ii], ii)
        novoArrayMaped.push(resultado)
    }
    return novoArrayMaped
}

main()
async function main(){
    try{
        const result = await service.getPeople('a')
        const names = []

        // console.time('forEach')
        // result.results.forEach(element => {
        //     names.push(element.name)    
        // })
        // console.timeEnd('forEach')

        // console.time('Map')
        // const namesMap = result.results.map(people => people.name)
        // console.timeEnd('Map')
        
        console.time('MeuMap')
        const namesMeuMap = result.results.meuMap(( people, i) => {
            return `[${i}]${people.name}`
        })
        console.timeEnd('MeuMap')
        

        // console.log(names)
        // console.log(namesMap)
        console.log(namesMeuMap)
    }catch(error){
        console.error('BadRequest', error)

    }
}