function train(arr) {
    let wagons = arr.shift().split(" ").map(Number);
    let maxPassengers = Number(arr.shift());

    for (const e of arr) {
        if (e.includes("Add")) {
            wagons.push(Number(e.split(" ")[1]));
        } else {
            for (let i = 0; i <= wagons.length; i++) {
                if (wagons[i] + Number(e) <= maxPassengers) {
                    wagons[i] += Number(e);
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)