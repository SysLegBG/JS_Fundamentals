function towns(townsData) {
    for (const line of townsData) {
        let el = line.split(" | ");
        let tempObj = {}

        tempObj["town"] = el.shift();
        tempObj["latitude"] = Number(el[0]).toFixed(2);
        tempObj["longitude"] = Number(el[1]).toFixed(2);
        console.log(tempObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])