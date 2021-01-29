function addSubtract(arr){
    function arraySum(arr){
        let sum = 0;
        for (const el of arr) {
            sum += el;
        }

        return sum;
    }

    let fSum = arraySum(arr);

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            arr[i] += i;
        }else{
            arr[i] -= i;
        }        
    }

    let sSum = arraySum(arr);

    console.log(arr);
    console.log(fSum);
    console.log(sSum);
}

addSubtract([-5, 11, 3, 0, 2])