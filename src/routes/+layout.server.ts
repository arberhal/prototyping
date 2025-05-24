// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';
import { getTopHouseArtists } from '$lib/server/spotify';

export const load: LayoutServerLoad = async () => {
	const houseArtists = await getTopHouseArtists();
	return { houseArtists }; // <-- wichtig!
};
