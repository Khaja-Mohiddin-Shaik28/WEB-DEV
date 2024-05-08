function add(a, b, ...remainingValues){
    let sum = 0;
    for( let i = 0; i < remainingValues.length; i++){
        sum += remainingValues[i]
    }
    console.log(sum)
}

add(4,6,4,4,3,2,5,6,6)