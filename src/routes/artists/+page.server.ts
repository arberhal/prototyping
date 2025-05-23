import { getArtists } from '$lib/db';

export const load = async () => {
  const artists = await getArtists();
  return { artists };
};
