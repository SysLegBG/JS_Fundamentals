function bombNumbers(numbers, bombArr) {
    let bomb = bombArr.shift();
    let power = bombArr.shift();

    while (numbers.includes(bomb)) {
        let bombIndex = numbers.findIndex(el => el === bomb);
        numbers.splice((bombIndex - power < 0) ? 0 : bombIndex - power, power * 2 + 1);
    }

    console.log(numbers.reduce((a, b) => a + b, 0));
    //console.log(numbers);
}

bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
)