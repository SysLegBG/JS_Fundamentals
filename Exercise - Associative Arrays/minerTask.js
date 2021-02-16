function minerTask(input) {
    let resources = {};

    for (let i = 0; i < input.length; i+=2) {
        let resource = input[i];
        if(!resources.hasOwnProperty(resource))
            resources[resource] = 0;

        resources[resource] += Number(input[i+1]);
    }

    Object.entries(resources).forEach(resource => console.log(`${resource[0]} -> ${resource[1]}`))
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])