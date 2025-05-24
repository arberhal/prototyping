import { fail, redirect } from '@sveltejs/kit';
import { getArtists, getSongs, createSong, deleteSong } from '$lib/db';

export const load = async () => {
	const [artists, songs] = await Promise.all([getArtists(), getSongs()]);
	return { artists, songs };
};

export const actions = {
	create: async ({ request }) => {
		const f = Object.fromEntries(await request.formData());

		const _id = Number(f._id);
		const artist_id = Number(f.artist_id);
		const song_name = (f.song_name ?? '').trim();
		const photo = (f.photo ?? '').trim() || 'noimage.jpg';

		if (!Number.isFinite(_id) || !Number.isFinite(artist_id) || !song_name) {
			return fail(400, { missing: true });
		}

		await createSong({ _id, artist_id, song_name, photo });
		throw redirect(303, '/songs');
	},

	delete: async ({ request }) => {
		const id = Number((await request.formData()).get('id'));
		if (!Number.isFinite(id)) return fail(400, { missing: true });

		await deleteSong(id);
		return { success: true };
	}
} satisfies import('@sveltejs/kit').Actions;
