function houseParty(list) {
    let guests = [];

    for (const person of list) {
        let name = person.split(' ').shift();
        if(person.includes('is going')){
            if(!guests.includes(name)){
                guests.push(name);
            }else{
                console.log(`${name} is already in the list!`);                
            }
        }else{
            if(guests.includes(name)){
                guests.splice(guests.findIndex((el) => el === name),1)
            }else{
                console.log(`${name} is not in the list!`);                
            }
        }
    }

    guests.forEach(guest => console.log(guest));
}

houseParty(
    ['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)