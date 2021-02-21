function race(input) {
    let racersNames = input.shift().split(", ");
    let racers = {};
    let line = input.shift();

    for (const name of racersNames) {
        racers[name] = 0;
    }

    while (line != "end of race") {
        let namePattern = /[A-Za-z]/g;
        let numPattern = /\d/g;
        let name = line.match(namePattern).join("");
        let distance = line.match(numPattern).reduce((a, c) => Number(a) + Number(c));
        racers[name] += distance;
        line = input.shift();
    }

    let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])