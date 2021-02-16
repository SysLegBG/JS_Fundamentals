function wordsTracker(textArr) {
    const words = textArr.shift().split(" ");
    let wordsHolder = {};

    words.forEach(word => wordsHolder[word] = 0)

    for (const word of textArr) {
        if(wordsHolder.hasOwnProperty(word))
            wordsHolder[word]++;
    }

    Object
        .entries(wordsHolder)
        .sort((a,b) => b[1] - a[1])
        .forEach(entrie => console.log(`${entrie[0]} - ${entrie[1]}`))
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])