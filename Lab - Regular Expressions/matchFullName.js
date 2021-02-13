function matchName(text){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames = [];
    let match = pattern.exec(text)
    while(match != null){
        validNames.push(match);
        match = pattern.exec(text)
    }

    console.log(validNames.join(" "));    
}

matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")