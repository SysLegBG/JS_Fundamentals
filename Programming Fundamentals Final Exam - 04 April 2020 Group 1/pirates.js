function pirates(input) {
    let cities = {};
    let line = input.shift();

    while (line != "Sail") {
        const [town, people, gold] = line.split("||");
        if (!cities.hasOwnProperty(town))
            cities[town] = [0, 0];

        cities[town][0] += Number(people);
        cities[town][1] += Number(gold);
        line = input.shift();
    }
 
    line = input.shift();

    while (line != "End") {
        if (line.includes("Plunder")) {
            const [command, town, people, gold] = line.split("=>");
            cities[town][0] -= Number(people);
            cities[town][1] -= Number(gold);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (cities[town][0] <= 0 || cities[town][1] <= 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (line.includes("Prosper")) {
            const [command, town, gold] = line.split("=>");
            if (Number(gold) <= 0){
                console.log("Gold added cannot be a negative number!");
                line = input.shift();
                continue;
            }
            cities[town][1] += Number(gold);
            console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town][1]} gold.`);            
        }
        line = input.shift();
    }

    if(Object.keys(cities).length > 0){
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        Object.entries(cities)
        .sort((a,b) =>{
            let n = b[1][1] - a[1][1];
            if(n != 0){
                return n;
            }
            return a[0] - b[0]
        })
        .forEach(town => console.log(`${town[0]} -> Population: ${town[1][0]} citizens, Gold: ${town[1][1]} kg`))
    }else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");        
    }
}

pirates([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ])