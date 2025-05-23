import { getSongsWithArtist } from '$lib/db';

export const load = async () => {
  const songs = await getSongsWithArtist();
  return { songs };
};
