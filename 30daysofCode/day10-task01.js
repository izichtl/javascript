let dec = (n) => {
    let binary = (n >>> 0).toString(2)
    let response = binary.search('0')
    if(response == -1){
        response = binary.length
    }
    let regex = /1+/g
    let regexM = binary.match(regex)
    let arr = []
    regexM.forEach( (i) => {
        arr.push(i.length)     
    })
    if(arr.length > 1){    
        arr.sort((a,b) => b - a )
        response = arr[0]
    }else{
        response = regexM[0].length
    }
    
    return response


}   

console.log(dec(5))
console.log(dec(6))
console.log(dec(13))
console.log(dec(439))
console.log(dec(65535))