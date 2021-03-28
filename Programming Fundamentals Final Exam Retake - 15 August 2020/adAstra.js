function adAstra([string]) {
    const pattern = /([\|#])(?<item>[A-Z][a-z]+\s?([A-Z][a-z]+)?)\1(?<date>(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2})\1(?<cal>[0-9]{1,4}|10000)\1/g;
    let match = pattern.exec(string);
    let food = {};
    let totalCal = 0;

    while(match != null){
        const item = match.groups.item;
        food[item] = [, 0];
        food[item][0] = match.groups.date;
        food[item][1] += Number(match.groups.cal);
        match = pattern.exec(string);
    }

    for (const value of Object.values(food)) {
        totalCal += value[1];
    }

    console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);

    for (const [item, [date, cal]] of Object.entries(food)) {
        console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${cal}`);        
    }    
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])