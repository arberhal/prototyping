
import { getArtist } from '$lib/db';

export const load = async ({ params }) => {
	const artist = await getArtist(params.id);  
	
	return { artist };
};
