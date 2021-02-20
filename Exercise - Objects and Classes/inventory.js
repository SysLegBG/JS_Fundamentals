function inventory(herosData){
    class Hero{
        constructor(name, lvl, items){
            this.name = name;
            this.level= lvl;
            this.inventory = items;
        }
    }

    let heroeList = [];

    herosData.forEach(heroInfo =>{
        let [name, lvl, items] = heroInfo.split(" / ");
        items = items
        .split(", ")
        .sort((a,b) => a.localeCompare(b));
        const hero = new Hero(name, Number(lvl), items)
        heroeList.push(hero);
    })

    sortedHeroes = heroeList.sort((a,b) => a.level - b.level)
    sortedHeroes.forEach(hero => console.log(
`Hero: ${hero.name}
level => ${hero.level}
items => ${hero.inventory.join(", ")}`
    ))
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]    )