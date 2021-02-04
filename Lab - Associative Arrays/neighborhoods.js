function neighborhoods(data) {
    let neighborhoodsData = new Map();

    let neighborhoods = data.shift().split(", ");
    neighborhoods.forEach( neighborhood => neighborhoodsData.set(neighborhood, []));

    data.forEach(line =>{
        const [neighborhood, person] = line.split(" - ");
        if(neighborhoodsData.has((neighborhood)))
            neighborhoodsData.get(neighborhood).push(person);
    })            

    Array
        .from(neighborhoodsData)
        .sort((a,b) => b[1].length - a[1].length)
        .forEach(entry =>{
            console.log(`${entry[0]}: ${entry[1].length}`);
            entry[1].forEach(inhabitant => console.log(`--${inhabitant}`))            
        })
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])