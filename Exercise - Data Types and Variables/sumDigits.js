function sumDigits(num){
    let sum = 0;
    let numStrig = num.toString();

    for(let i = 0; i < numStrig.length; i++){
        sum += Number(numStrig[i]);
    }

    console.log(sum);
    
}

sumDigits(245678)