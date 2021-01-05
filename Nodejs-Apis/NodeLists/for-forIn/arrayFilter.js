const { getPeople } = require('./service')


Array.prototype.myFilter = function (callback){
    const lista = []
    for (i in this) {
        const item = this[i]
        const result = callback(item, i, this)
            if(!result) continue;
            lista.push(item)
        
    } 
    return lista;
}



async function main(){
    try{
        const {
            results 
        } = await getPeople('a')
        const familiaLars = results.myFilter( (item, index, lista ) => {
            console.log('Index: ', index, lista.length)
            return item.name.toLowerCase().indexOf('skywalker') !== -1
        })
        
            const names = familiaLars.map((pessoa) => pessoa.name ) 
        console.log(names)
    }catch(error){
        console.error('BadRequest', error)
    }
}
main()
console.log('...')