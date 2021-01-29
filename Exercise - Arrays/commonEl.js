function commonEl(fArr,sArr){
    for (const el of fArr) {
        if(sArr.includes(el)){
            console.log(el);
        }
    }
}

commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
        ['Petar', 10, 'hey', 4, 'hello', '2'])