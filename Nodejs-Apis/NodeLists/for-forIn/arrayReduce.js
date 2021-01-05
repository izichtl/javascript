const { getPeople } = require('./service')

Array.prototype.myReduce = function (callback,  valorInicial){
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    
    for(let i = 0 ; i <= this.length -1; i++){
        valorFinal = callback(valorFinal, this[i], this)
    }
    return valorFinal
}

async function main(){
    try{
        const { results } = await getPeople('a')
        const pesos = results.map(item => parseInt(item.height))
        // const total = pesos.myReduce((anterior, proximo) => anterior + proximo)

        const myList = [
            ['Ivan', 'Zichtl'],
            ['Larysse', 'Cristina']
        ]
        const total = myList.myReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, [])
        .join(', ')
        console.log('Total: ', total)
    }catch (error){
        console.error('BadRequest', error)
    }
}
main()