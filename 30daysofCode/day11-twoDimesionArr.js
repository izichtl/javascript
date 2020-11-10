
let arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0] ]


function HourGlassSum(arr) {
    let sumArr = []
    for (let i = 0; i < (arr.length-2); i++){
        let sum =( 
        arr[0][i] +
        arr[0][i+1] +
        arr[0][i+2] +
        arr[1][i+1] +
        arr[2][i] +
        arr[2][i+1] +
        arr[2][i+2])
        sumArr.push(sum)

        for(let j = 0; j < (arr.length-2); j++){
                let sum =( 
                arr[j][i] +
                arr[j][i+1] +
                arr[j][i+2] +
                arr[j+1][i+1] +
                arr[j+2][i] +
                arr[j+2][i+1] +
                arr[j+2][i+2])
                sumArr.push(sum)
                
            }

        sumArr.sort( (a,b) => b-a)
        sumArr[0]
    }
console.log(sumArr[0])
}

HourGlassSum(arr)
/*
arr[0][0] = 'a'
arr[0][0+1] = 'b'
arr[0][0+2] = 'c'
arr[1][0+1] = 'd'
arr[2][0] = 'e'
arr[2][0+1] = 'f'
arr[2][0+2] = 'g'
*/

