import { getRandomSongsWithArtist, getRandomArtists } from '$lib/db';


export async function load() {
  
    const songs = await getRandomSongsWithArtist(12);
    const artists = await getRandomArtists(12);

    return {
      songs,
      artists
    };

}
