function store(stock, delivery) {
    let products = {}

    while (stock.length > 0) {
        products[stock.shift()] = Number(stock.shift());
    }

    while (delivery.length > 0) {
        const product = delivery.shift();
        if (!products.hasOwnProperty(product)) {
            products[product] = 0;
        }
        products[product] += Number(delivery.shift());
    }

    for (const [key, value] of Object.entries(products)) {
        console.log(`${key} -> ${value}`)
    }
}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])