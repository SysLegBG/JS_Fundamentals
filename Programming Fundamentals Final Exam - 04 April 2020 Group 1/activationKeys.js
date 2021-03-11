function activationKeys(input) {
    let key = input.shift().split("");
    let commandLine = input.shift();

    while (commandLine != "Generate") {
        const commands = commandLine.split(">>>");
        if (commands[0] == "Contains") {
            if (key.includes(commands[1])) {
                console.log(`${key.join("")} contains ${commands[1]}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (commands[0] == "Flip") {
            if (commands[1] == "Upper") {
                for (let i = Number(commands[2]); i < Number(commands[3]); i++) {
                    key[i] = key[i].toUpperCase();
                }
            } else {
                for (let i = Number(commands[2]); i < Number(commands[3]); i++) {
                    key[i] = key[i].toLowerCase();
                }
            }
            console.log(key.join(""));
        } else if(commands[0] == "Slice"){
            key.splice(Number(commands[1]), Number(commands[2]) - Number(commands[1]))
            console.log(key.join(""));
        }
        commandLine = input.shift();
    }

    console.log(`Your activation key is: ${key.join("")}`);
}

activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
])