function solve(input) {
    const pattern = /(U\$)([A-Z][a-z]{2,})\1(P@\$)([A-Za-z]{5,}.*\d)\3/;
    let succsesful = 0;
    input.shift();

    for (const line of input) {
        let match = line.match(pattern);
        if (match) {
            succsesful++;
            console.log("Registration was successful");
            console.log(`Username: ${match[2]}, Password: ${match[4]}`);
        } else {
            console.log("Invalid username or password");
        }
    }

    console.log(`Successful registrations: ${succsesful}`);
}

solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
])
console.log("---");
solve(['2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412']);
console.log("---");
solve([
    '3',
    'U$myU$-->P@$asdqwe123P@$',
    'Sara 1232412',
    'U$NameU$P@$Pass234P@$'
])