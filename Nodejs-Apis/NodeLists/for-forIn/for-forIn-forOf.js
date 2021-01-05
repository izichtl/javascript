const service = require('./service')


const nome = 'a'
main()
async function main(){
    try {
        const result = await service.getPeople(nome)
        const names = []
        console.time('for')
        for (let i=0 ; i<= result.results.length -1; i++ ) {
                const pessoa = result.results[i]
                names.push(pessoa.name)
            
            }
        console.timeEnd('for')
            
            
        
        console.time('forIn')
        for(let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forIn')
        
        
        console.time('forOf')
        for(pessoa of result.results){
            names.push(pessoa.name)
        }
        console.timeEnd('forOf')
        
        
        console.log('Nomes:', names)
    } catch (error) {
        console.error('Erro Interno', error)
    }
}