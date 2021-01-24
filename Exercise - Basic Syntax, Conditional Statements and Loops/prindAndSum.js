function printAndSum(sn,en){
    let numbers = "";
    let sum = 0;

    for(let i = sn; i <= en; i++){
        numbers += `${i} `;
        sum += i;
    }

    console.log(numbers);
    console.log(`Sum: ${sum}`);    
}

printAndSum(5, 10)