function toJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }
    console.log(JSON.stringify(person));
}

toJSON('George', 'Jones', 'Brown')