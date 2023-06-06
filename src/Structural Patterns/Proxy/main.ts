import LocalPlayerProxy from "./local-music-player";
import MusicPlayerInterface from "./music-player.interface";
import YouTubePlayer from "./youTube-player";

//* This is just the YouTube player, when we play a song from there, we always make requests to him
// const youTubePlayer = new YouTubePlayer();
// playSongs(youTubePlayer, 'Dust in the wind', 'Stairway to heaven', 'Stairway to heaven', 'stSDsrgGDgsdfg', 'Dust in the wind');


//* This is the proxy music player, when we play a song from there, we firstly check if we have it in the cache,
//* if YES, we play the song from there, without making a request to the YouTube player
//* if NOT, we make request to the YouTube player
const localPlayer = new LocalPlayerProxy();
playSongs(
    localPlayer,
    'Dust in the wind',
    'Stairway to heaven',
    'Stairway to heaven',
    'stSDsrgGDgsdfg',
    'Dust in the wind');


function playSongs(player: MusicPlayerInterface, ...songs: string[]) {
    songs.forEach(s => player.playSong(s));
}



// function rndSongName() {
//     const tenSongs = ['Dust in the wind', 'Hotel California', 'Stairway to heaven', 'Bohemian Rhapsody', 'Sweet child o mine', 'Free bird', 'Comfortably numb', 'All along the watchtower', 'November rain', 'One'];
//     return tenSongs[Math.floor(Math.random() * tenSongs.length)];
// }