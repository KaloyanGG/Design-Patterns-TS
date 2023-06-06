import MusicPlayerInterface from "./music-player.interface";

export default class YouTubePlayer implements MusicPlayerInterface {

    tenSongs = ['Dust in the wind', 'Hotel California', 'Stairway to heaven', 'Bohemian Rhapsody', 'Sweet child o mine', 'Free bird', 'Comfortably numb', 'All along the watchtower', 'November rain', 'One'];

    playSong(songName: string): void | null {
        console.log('... Calling YouTube Player...');
        if (this.tenSongs.indexOf(songName) !== -1) {
            console.log('[YouTube Player] Playing: ' + songName);
        } else {
            console.log('Song not found');
            return null;
        }

    }

}