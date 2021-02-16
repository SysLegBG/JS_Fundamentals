function piccolo(entranceData) {
    let parking = {};

    for (const car of entranceData) {
        const [action, number] = car.split(", ");
        parking[number] = action;
    }

    let isEmpty = true;

    Object
        .entries(parking)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(car => {
            if (car[1] == "IN"){
                console.log(car[0]);
                isEmpty = false;
            }
        })

    if (isEmpty)
        console.log("Parking Lot is Empty");        
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])