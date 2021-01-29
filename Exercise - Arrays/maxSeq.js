function maxSeq(arr){
    let seq = [];
    let currentSeq = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] === arr[i - 1]){
            currentSeq.push(arr[i]);
        }else{
            currentSeq = [];
            currentSeq.push(arr[i]);
        }

        if(currentSeq.length > seq.length){
            seq = currentSeq;
        }
    }

    console.log(seq.join(" "));    
}

maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSeq([1, 1, 1, 2, 3, 1, 3, 3])
maxSeq([4, 4, 4, 4])
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3])