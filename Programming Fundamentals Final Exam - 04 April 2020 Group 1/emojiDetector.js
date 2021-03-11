function emojiDetector([string]) {
    let threshold = string.match(/\d/g).reduce((n, c) => n * c);
    let emojiPat = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let match = emojiPat.exec(string);
    let emojis = {};

    while (match != null) {
        let emojiSum = 0;
        for (const ch of match.groups.emoji) {
            emojiSum += ch.charCodeAt(0)
        }
        emojis[match[0]] = emojiSum;
        match = emojiPat.exec(string);
    }

    let coolEmojis = [];
    Object.entries(emojis).forEach(emoji => { if (emoji[1] > threshold) coolEmojis.push(emoji[0]) });
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${Object.keys(emojis).length} emojis found in the text. The cool ones are:`);


    if (coolEmojis.length > 0) {        
        console.log(coolEmojis.join("\n"));
    }
}

emojiDetector([
    'In the SofiaaZoo there 1are animals in total! ::Smiley:: This includes  **Tigers**,  ::Elephant:,  **Monk*, a **Gorilla::,  ::fox:es: and  different types of :Snak::Es::. ::Mooning:: **Shy**'
  
])