
const Split = function(input){
    let regex = /[a-zA-Z]+/gi
    let textInput = input.match(regex)
    let even = ''
    let odd = ''
    textInput.forEach(element => {
        for (let i = 0; i < (element.length); i++) {
            let check = i % 2 == 0
            if(check){
                even = even + element[i]
            }else{
                odd = odd +element[i]
            }    
        }
        console.log(even + ` ` + odd)
        even = ''
        odd = ''
    })
  
}
console.log(Split(`2
Hacker
Rank`))

