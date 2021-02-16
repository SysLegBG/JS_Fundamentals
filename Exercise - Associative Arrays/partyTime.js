function partyTime(list) {
    let tempGuest = list.shift();
    let vipGuestList = new Map();
    let regGuestList = new Map();

    while (tempGuest != 'PARTY' && typeof tempGuest != 'undefined') {
        if (isNaN(Number(tempGuest[0]))) {
            regGuestList.set(tempGuest, 0);
        } else {
            vipGuestList.set(tempGuest, 0)
        }
        tempGuest = list.shift();
    }

    for (const guest of list) {
        if (vipGuestList.has(guest))
            vipGuestList.delete(guest);

        if (regGuestList.has(guest))
            regGuestList.delete(guest);
    }

    console.log(Array.from(vipGuestList).length + Array.from(regGuestList).length);

    Array.from(vipGuestList).forEach(guest => console.log(guest[0]));
    Array.from(regGuestList).forEach(guest => console.log(guest[0]));
}

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])