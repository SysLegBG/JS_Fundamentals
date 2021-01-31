function JSONtoObj(jsonStr){
    let person = JSON.parse(jsonStr);

    for (const [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);        
    }
}

JSONtoObj('{"name": "George", "age": 40, "town": "Sofia"}')