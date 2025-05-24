<script lang="ts">
	const { data, form } = $props();
	const { artists, songs } = data;
</script>

<div
	class="
    fixed top-16 right-0 bottom-0 left-[calc(25%+8px)] m-2 overflow-hidden rounded-xl bg-[#121212] px-4 text-white sm:px-6 md:px-8"
>
	<h1 class="mb-8 text-3xl font-bold">Song anlegen / löschen</h1>
	<div class="mt-6 flex flex flex-col justify-between pr-2 md:mt-8 md:flex-row">
		<form
			method="POST"
			action="?/create"
			class="mb-12 grid w-full gap-4 rounded-xl bg-[#202020] p-6 text-gray-300 md:w-[40%]"
		>
			<h2 class="text-xl font-semibold">Neuen Song anlegen</h2>

			<input
				name="_id"
				type="number"
				placeholder="Song-ID (Zahl)"
				required
				class="w-full rounded-md p-2"
			/>

			<input
				name="song_name"
				type="text"
				placeholder="Song-Titel"
				required
				class=" w-full rounded-md p-2"
			/>

			<select name="artist_id" required class="w-full rounded-md p-2">
				<option value="" disabled selected hidden>Artist wählen …</option>
				{#each artists as artist}
					<option value={artist._id}>{artist.artist_name}</option>
				{/each}
			</select>

			<input
				name="photo"
				type="text"
				placeholder="Foto-Datei (optional)"
				class="w-full rounded-md p-2"
			/>

			<button type="submit" class="rounded-md bg-black px-4 py-2 text-white hover:opacity-80">
				Erstellen
			</button>

			{#if form?.missing}
				<p class="text-sm text-red-500">Bitte alle Pflichtfelder ausfüllen.</p>
			{/if}
		</form>

		<form
			method="POST"
			action="?/delete"
			class="flex h-full w-full flex-col gap-4 rounded-xl bg-[#202020] p-6 text-gray-200 md:w-[40%]"
		>
			<h2 class="w-full text-xl font-semibold">Song löschen</h2>

			<select name="id" required class="w-full rounded-md p-2">
				<option value="" disabled selected hidden>Song auswählen …</option>
				{#each songs as song}
					<option value={song._id}>
						{song.song_name} — ID {song._id}
					</option>
				{/each}
			</select>

			<button
				type="submit"
				class="self-stretch rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 sm:self-auto"
			>
				Löschen
			</button>
		</form>
	</div>
</div>
