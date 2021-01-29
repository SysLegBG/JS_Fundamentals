function equalSum(arr) {
    let notFound = true;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        if (i > 0) {
            for (let j = 0; j < i; j++) {
                leftSum += arr[j];
            }
        }
        if (i < arr.length - 1) {
            for (let j = i + 1; j < arr.length; j++) {
                rightSum += arr[j];
            }
        }

        if( leftSum == rightSum){
            console.log(i);
            notFound = false;
            break;
        }
    }

    if(notFound){
        console.log("no");
    }
}

equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])