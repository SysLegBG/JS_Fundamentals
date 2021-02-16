function oddOccurrendes(inputStr){
    let words = inputStr.split(" ").map(word => word.toLowerCase());
    let counter = new Map();

    words.forEach(word =>{
        if(!counter.has(word))
            counter.set(word, 0);

        let current = counter.get(word);
        counter.set(word, current += 1);
    })

    let oddWords = [];

    Array
        .from(counter)
        .forEach(entrie =>{
            if(entrie[1] % 2 != 0)
                oddWords.push(entrie[0])
        })

    console.log(oddWords.join(" "));    
}

oddOccurrendes('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')