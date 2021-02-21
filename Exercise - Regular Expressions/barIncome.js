function barIncome(input) {
    let line = input.shift();
    let income = 0;
    let namePat = /%(?<name>[A-Z][a-z]+)%/;
    let productPat = /<(?<product>\w+)>/;
    let qtyPat = /\|(?<qty>\d+)\|/;
    let pricePat = /(?<price>\d+\.?\d*)\$/;

    while (line != "end of shift") {
        let name = namePat.exec(line);
        let product = productPat.exec(line);
        let qty = qtyPat.exec(line);
        let price = pricePat.exec(line);
        if (name && product && qty && price) {
            name = name.groups.name;
            product = product.groups.product;
            qty = qty.groups.qty;
            price = price.groups.price;
            let total = qty * price;
            console.log(`${name}: ${product} - ${total.toFixed(2)}`);
            income += total;
        }
        line = input.shift();
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

barIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])