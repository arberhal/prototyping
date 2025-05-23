import { getRandomSongsWithArtist, getRandomArtists } from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  
    const songs = await getRandomSongsWithArtist(12);
    const artists = await getRandomArtists(12);

    return {
      songs,
      artists
    };

}
