function wordOccurrences(words) {
    let wordCounter = new Map();

    for (const word of words) {
        let counter = 1;
        if(wordCounter.has(word))
            counter += wordCounter.get(word);

        wordCounter.set(word, counter);
    }

    Array
        .from(wordCounter)
        .sort((a,b) => b[1] - a[1])
        .forEach(word => console.log(`${word[0]} -> ${word[1]} times`))
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])