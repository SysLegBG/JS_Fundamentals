function solve(input) {
    let email = input.shift();
    let line;
    let actions = {
        Make(email, mode) {
            mode == "Upper" ? email = email.toUpperCase() : email = email.toLowerCase();
            console.log(email);
            return email;
        },
        GetDomain(email, count) {
            console.log(email.substring(email.length - Number(count)))
            return email;
        },
        GetUsername(email) {
            let index = email.indexOf("@");
            index != -1 ? console.log(email.substring(0, index)) : console.log(`The email ${email} doesn't contain the @ symbol.`);
            return email;
        },
        Replace(email, char) {
            while (email.includes(char)) {
                email = email.replace(char, "-");
            }
            console.log(email);
            return email;
        },
        Encrypt(email) {
            let encrypted = [];
            for (const ch of email) {
                encrypted.push(ch.charCodeAt())
            }
            console.log(encrypted.join(" "))
            return encrypted;
        }
    }

    while ((line = input.shift()) != "Complete") {
        let [actionName, param] = line.split(" ");
        email = actions[actionName](email, param);
    }
}

solve([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
])
console.log("------------");
solve([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete'
])
console.log("------------");
solve([
    'Another@Mail.com',
    'Make Lower',
    'GetUsername',
    'GetDomain 3',
    'Encrypt',
    'Complete'
])
