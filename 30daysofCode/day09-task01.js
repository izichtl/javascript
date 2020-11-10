




function Factor(input,){ 
    if(input === 0) return 1
    else return input * Factor(input-1)

}
console.log(Factor(3))