function maxNum(arr){
    let arrLength = arr.length;
    let bigger = [];

    for (let i = 0; i < arrLength; i++) {
        let current = arr.shift();
        let isBigger = true;

        for (let j = 0; j < arr.length; j++) {
            if(current <= arr[j]){
                isBigger = false;
                break;
            }
        }

        if(isBigger){
            bigger.push(current)
        }
    }

    console.log(bigger.join(" "));
}

maxNum([27, 19, 42, 2, 13, 45, 48])