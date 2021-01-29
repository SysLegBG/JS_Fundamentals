function dungeon(input) {
    let stages = input.shift().split("|");
    let hp = 100;
    let coins = 0;
    let room = 0;
    let isDead = false;

    for (let i = 0; i < stages.length; i++) {
        room++;
        let stage = stages[i].split(" ");

        switch (stage[0]) {
            case "potion":
                let currentHp = hp;
                hp += Number(stage[1]);
                if (hp > 100) { hp = 100; };
                console.log(`You healed for ${hp - currentHp} hp.`);
                console.log(`Current health: ${hp} hp.`)
                break;
            case "chest":
                coins += Number(stage[1]);
                console.log(`You found ${stage[1]} coins.`);
                break;
            default:
                hp -= stage[1];
                if (hp > 0) {
                    console.log(`You slayed ${stage[0]}.`)
                } else {
                    console.log(`You died! Killed by ${stage[0]}.`);
                    console.log(`Best room: ${room}`);
                    isDead = true;
                }
        }

        if (isDead) { break; }
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${hp}`);
    }
}

dungeon(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])