function songs(songsArr) {
    class Song {
        constructor(typeList, name, duration) {
            this.typeList = typeList;
            this.name = name;
            this.duration = duration;
        }
    }
    
    const numOfSongs = songsArr.shift();
    const songsType = songsArr.pop();
    let songList = [];

    for (let i = 0; i < numOfSongs; i++) {
        const [typeList, name, duration] = songsArr.shift().split("_");
        const song = new Song(typeList, name, duration);
        songList.push(song);
    }

    if (songsType == "all") {
        songList.forEach(song => console.log(song.name))
    } else {
        songList
        .filter(song => song.typeList == songsType)
        .forEach(song => console.log(song.name))
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )