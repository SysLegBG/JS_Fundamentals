function distinct(arr){
    for(let i = 1; i <= arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[i] === arr[j]){
                arr.splice(i,1);
                i--;
            }
        }
    }

    console.log(arr.join(' '));
    
}

distinct([20, 8, 12, 13, 4, 4, 8, 5])