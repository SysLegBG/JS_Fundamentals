function employees(names) {
    let list = {};

    for (const name of names) {
        list[name] = name.length;
    }

    for (const [key, value] of Object.entries(list)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])