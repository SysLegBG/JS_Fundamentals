function storage(data) {
    let storage = new Map();

    data.forEach(line => {
        const [product, qty] = line.split(" ");

        if (!storage.has(product))
            storage.set(product, 0)

        storage.set(product, storage.get(product) + Number(qty))
    })

    for (const [product, qty] of storage) {
        console.log(`${product} -> ${qty}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])