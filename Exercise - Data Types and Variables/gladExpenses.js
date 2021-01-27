function gladExpenses(lostFights, helmet, sword, shield, armor) {
    let sum = 0;
    let shieldBrakes = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) { sum += helmet }
        if (i % 3 == 0) { sum += sword }
        if (i % 2 == 0 && i % 3 == 0) {
            sum += shield;
            shieldBrakes++;
            if (shieldBrakes % 2 == 0) { sum += armor }
        }
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladExpenses(7, 2, 3, 4, 5)