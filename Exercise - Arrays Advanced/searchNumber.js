function searchNumber(arr, rules) {
    let counter = 0;
    arr
        .slice(rules[1], rules[0])
        .forEach(element => { if (element === rules[2]) counter++; });

    console.log(`Number ${rules[2]} occurs ${counter} times.`);
}

searchNumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)