function matchDates([string]){
    const pattern = /(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

    let match = pattern.exec(string);

    while(match != null){
        const day = match.groups["day"];
        const month = match.groups["month"];
        const year = match.groups["year"];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        match = pattern.exec(string);      
    }
}

matchDates(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"])