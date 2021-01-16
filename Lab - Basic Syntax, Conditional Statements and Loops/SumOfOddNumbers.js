function solve(n){
    n = Number(n);
    let oddCounter = 0;
    let oddSum = 0;

    for(i = 1; i <= Number.MAX_SAFE_INTEGER; i++ ){
        if(i % 2 == 1){
            console.log(i);
            oddCounter++;
            oddSum += i;
        }
        if(oddCounter >= n){
            break;
        }
    }

    console.log(`Sum: ${oddSum}`);
}

solve(5);