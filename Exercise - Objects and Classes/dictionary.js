function dictionary(data) {
    let dictionary = {};

    data.forEach(el => {
        const obj = JSON.parse(el);
        const term = Object.keys(obj)[0];

        if (!dictionary.hasOwnProperty(term)) {
            dictionary[term] = "";
        }

        dictionary[term] = obj[term]
    });

    Object
        .entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(line => console.log(`Term: ${line[0]} => Definition: ${line[1]}`))
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])