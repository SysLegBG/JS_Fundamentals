function furniture(input) {
    let line = input.shift();
    let cart = [];
    let total = 0;
    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

    console.log("Bought furniture:");

    while (line != "Purchase") {
        let match = pattern.exec(line);
        if (match) {
            console.log(match.groups.furniture);
            total += match.groups.price * match.groups.qty;
        }
        line = input.shift();
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])