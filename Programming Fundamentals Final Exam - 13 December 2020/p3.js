function solve(input) {
    let people = {};
    let actions = {
        Add(people, name, hp, energy) {
            [hp, energy] = [Number(hp), Number(energy)]
            if (!people.hasOwnProperty(name)){
                people[name] = { hp: hp, energy: energy };
            }else{
            people[name].hp += hp;                
            }

            //people[name].energy += energy;

            if (people[name.hp > 100000])
                people[name].hp = 100000;
            if (people[name.energy > 100])
                people[name].energy = 100;
        },
        Attack(people, attacker, defender, dmg) {
            if (people.hasOwnProperty(attacker) && people.hasOwnProperty(defender)) {
                people[defender].hp -= Number(dmg);
                people[attacker].energy--;

                if (people[defender].hp <= 0) {
                    delete people[defender];
                    console.log(`${defender} was disqualified!`);
                }
                if (people[attacker].energy <= 0) {
                    delete people[attacker];
                    console.log(`${attacker} was disqualified!`);
                }
            }
        },
        Delete(people, name) {
            if (name == "All") {
                for (const key in people) {
                    delete people[key];
                }
            } else if (people.hasOwnProperty(name)) {
                delete people[name];
            }
        }
    }
    let line;

    while ((line = input.shift()) != "Results") {
        let [actionName, ...params] = line.split(":");
        actions[actionName](people, ...params);
    }
    console.log(`People count: ${Object.keys(people).length}`)
    Object.entries(people)
        .sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]))
        .forEach(person => console.log(`${person[0]} - ${person[1].hp} - ${person[1].energy}`));
}

solve([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
])
//console.log("---");
//solve([
//    'Add:Bonnie:3000:5',
//    'Add:Johny:4000:10',
//    'Attack:Johny:Bonnie:400',
//    'Add:Chicken:1000:1',
//    'Add:Rabbit:3000:5',
//    'Add:Buggy:1259:10',
//    'Attack:Chicken:Rabbit:1000',
//    'Results'
//])
//console.log("---");
//solve([
//    'Add:Bonnie:3000:5',
//    'Add:Johny:4000:10',
//    'Delete:All',
//    'Delete:All',
//    'Add:Bonnie:3333:3',
//    'Add:Bonnie:667:0',
//    'Delete:Angel',
//    'Add:Angel:4000:1',
//    'Delete:Angel',
//    'Delete:All',
//    'Attack:Johny:Bonnie:400',
//    'Results'
//])