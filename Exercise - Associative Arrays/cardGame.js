function cardGame(playerData) {
    let players = {};

    const powerList = {
        "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14,
        "S": 4, "H": 3, "D": 2, "C": 1
    }

    for (let player of playerData) {
        player = player.split(": ");
        let name = player.shift();
        let cards = player[0].split(", ");

        if (!players.hasOwnProperty(name))
            players[name] = new Set();

        cards.forEach(card => players[name].add(card));
    }

    Object
        .entries(players)
        .forEach(player => {
            let cardsValue = 0;
            Array
                .from(player[1])
                .forEach(card => {
                    card = card.split("");
                    let multiplier = card.pop();
                    cardsValue += powerList[card.join("")] * powerList[multiplier]
                })
            console.log(`${player[0]}: ${cardsValue}`);

        })
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])