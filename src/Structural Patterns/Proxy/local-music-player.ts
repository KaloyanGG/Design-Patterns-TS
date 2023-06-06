import MusicPlayerInterface from "./music-player.interface";
import YouTubePlayer from "./youTube-player";

export default class LocalPlayerProxy implements MusicPlayerInterface {

    youTubePlayer = new YouTubePlayer();
    cache: string[] = [];

    playSong(songName: string): void | null {

        if (this.cache.indexOf(songName) === -1) {
            if (this.youTubePlayer.playSong(songName) === undefined) {
                this.cache.push(songName);
            }
        } else {
            console.log('[Local Player] Playing: ' + songName);
        }

    }


}