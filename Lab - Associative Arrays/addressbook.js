function address(data) {
    let addressBook = {};

    data.forEach(line => {
        const [name, address] = line.split(":");
        addressBook[name] = address;
    })

    Object
        .entries(addressBook)
        .sort((a,b) => a[0].localeCompare(b[0]))
        .forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`))
}

address(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])