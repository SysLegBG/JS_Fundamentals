function sort(numbers) {
    let sorted = [];
    numbers.sort((a, b) => b - a);
    let iterations = numbers.length;

    for (i = 0; i <= iterations; i++) {
        if (i % 2 == 0) {            
            sorted.push(numbers.shift());
        }else{
            sorted.push(numbers.pop())
        }
    }

    console.log(sorted.join(' '));
    
}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])