function imitationGame(input) {
    let message = input.shift().split("");
    let line = input.shift();

    while (line != "Decode") {
        const command = line.split("|");
        switch (command[0]) {
            case "Move":
                for (let i = 0; i < command[1]; i++) {
                    message.push(message.shift())
                }
                break;
            case "Insert":
                let start = command[1];
                //if(start < 0 || start > message.length) start = 0;
                message.splice(start, 0, ...command[2].split(""));
                break;
            case "ChangeAll":
                let asString = message.join("");
                while(asString.includes(command[1])){
                    asString = asString.replace(command[1], command[2])
                }
                message = asString.split("");
                break;
        }
        line = input.shift();
    }

    console.log(`The decrypted message is: ${message.join("")}`);
}

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Insert|10|.',
    'ChangeAll|.|*',
    'Decode'])