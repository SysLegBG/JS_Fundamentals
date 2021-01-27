function spiceMine(yield) {
    let spiceAmount = 0;
    let days = 0;

    while (yield >= 100) {
        spiceAmount += yield - 26;
        days++;
        yield -= 10;
        if(spiceAmount < 0){spiceAmount = 0}
    }
    spiceAmount -= 26;
    if(spiceAmount < 0){spiceAmount = 0}

    console.log(days);
    console.log(spiceAmount);
}

spiceMine(111)