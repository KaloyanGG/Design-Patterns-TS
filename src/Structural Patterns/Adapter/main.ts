class Mp4SongList {
    play(): string {
        return '.sgnos 4pm emos gniyalP';
    }
}

interface Mp3PlayerInterface {
    playMusic(): string;
}

class Mp3Player implements Mp3PlayerInterface {

    playMusic(): string {
        return 'Playing some mp3 songs.';
    }

}

class Mp4ToMp3Adapter implements Mp3PlayerInterface {

    constructor(private mp4PlayerSongList: Mp4SongList) { }

    playMusic(): string {
        const mp4Songs = this.mp4PlayerSongList.play().split('').reverse().join('');
        return 'Playing the mp3 songs and Converted:\n ->' + mp4Songs;
    }

}

const mp3Player = new Mp3Player();
console.log(mp3Player.playMusic());

const mp4SongList = new Mp4SongList();
console.log(mp4SongList.play());

const adapter = new Mp4ToMp3Adapter(mp4SongList);
console.log(adapter.playMusic());