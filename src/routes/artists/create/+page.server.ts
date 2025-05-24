import { fail, redirect } from '@sveltejs/kit';
import { getArtists, createArtist, updateArtist } from '$lib/db';

export const load = async () => ({
	artists: await getArtists()          // für Update-Dropdown
});

export const actions = {
	/* ----------  CREATE  ---------- */
	create: async ({ request }) => {
		const f   = Object.fromEntries(await request.formData());
		const _id = Number(f._id);
		const name = (f.artist_name ?? '').trim();

		if (!Number.isFinite(_id) || !name) {
			return fail(400, { missing: true });
		}

		const { duplicate } = await createArtist({
			_id,
			artist_name: name,
			genre: (f.genre ?? '').trim(),
			photo: (f.photo ?? '').trim() || 'noimage.jpg'
		});

		if (duplicate) return fail(400, { duplicate: true });
		throw redirect(303, '/artists');
	},

	/* ----------  UPDATE  ---------- */
	update: async ({ request }) => {
		const f   = Object.fromEntries(await request.formData());
		const _id = Number(f.id);                       // kommt aus <select name="id">

		if (!Number.isFinite(_id)) {
			return fail(400, { missing: true });
		}

		const payload = {
			artist_name: (f.artist_name ?? '').trim(),
			genre: (f.genre ?? '').trim(),
			photo: (f.photo ?? '').trim()
		};

		// leere Strings entfernen, damit $set nichts auf '' setzt
		Object.keys(payload).forEach(k => !payload[k] && delete payload[k]);

		if (Object.keys(payload).length === 0) {
			return fail(400, { nothingToUpdate: true });
		}

		await updateArtist(_id, payload);
		return { success: true };
	}
} satisfies import('@sveltejs/kit').Actions;
