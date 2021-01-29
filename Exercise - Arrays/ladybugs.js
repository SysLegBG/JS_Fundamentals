function ladybugs(arr) {
    let field = new Array(arr[0]).fill(0);
    let bugIndex = arr[1].split(" ").map(Number);

    for (const el of bugIndex) {
        if (el >= field.length) { continue; }
        field[el] = 1;
    }

    for (let i = 2; i < arr.length; i++) {
        let move = arr[i].split(" ");
        let direction = move[1];
        move = move.map(Number);

        if (field[move[0]] != 1 || typeof field[move[0]] == "undefined") { continue; }

        if (direction == "right") {
            field[move[0]] = 0;
            for (let j = move[0] + move[2]; j < field.length; j += move[2]) {
                if (field[j] == 0) {
                    field[j] = 1;
                    break;
                }
                if (typeof field[j] == "undefined") { break; }
            }
        } else {
            field[move[0]] = 0;
            for (let k = move[0] - move[2]; k >= 0; k -= move[2]) {
                if (field[k] == 0) {
                    field[k] = 1;
                    break;
                }
                if (typeof field[k] == "undefined") { break; }
            }
        }
    }
    
    console.log(field.join(" "));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1'])
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])
ladybugs([5, '3', '3 left 2', '1 left -2'])
