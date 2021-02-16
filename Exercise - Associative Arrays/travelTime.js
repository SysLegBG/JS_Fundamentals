function travelTime(inputData) {
    let destinations = {};

    for (const destination of inputData) {
        let [country, town, cost] = destination.split(" > ");
        if (!destinations.hasOwnProperty(country))
            destinations[country] = {};

        if (!destinations[country].hasOwnProperty(town))
            destinations[country][town] = Number(cost);

        if (cost < destinations[country][town])
            destinations[country][town] = Number(cost);
    }

    Object
        .entries(destinations)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(country => {
            let towns = []
            Object.entries(country[1]).sort((a, b) => a[1] - b[1]).forEach(town => towns.push(town.join(" -> ")));
            console.log(`${country[0]} -> ${towns.join(" ")}`);            
        })
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])