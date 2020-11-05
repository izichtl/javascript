
function tabuada(entrada, base){
    for(let i = 1; i <= base; i++){
        let product = entrada * i
        console.log(`${entrada} x ${i} = ${product}`)
    }
    
    console.log(`                       `)
    console.log(`                       `)
    return "Final Function"

}
console.log(tabuada(2, 10))

