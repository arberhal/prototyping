<script lang="ts">
	const { data, form } = $props();
	const { artists } = data;
</script>

<div
	class="fixed top-16 right-0 bottom-0 left-[calc(25%+8px)] m-2
	       overflow-hidden rounded-xl bg-[#121212] px-4 text-white
	       sm:px-6 md:px-8 p-8" 
>
	<h1 class="mb-8 text-3xl font-bold">Artist anlegen / updaten</h1>

	<div class="flex flex-col gap-8 md:flex-row">

		<form method="POST" action="?/create"
		      class="grid w-full md:w-1/2 gap-4 rounded-xl bg-[#202020] p-6 text-gray-300">
			<h2 class="text-xl font-semibold">Neuen Artist anlegen</h2>

			<input name="_id" type="number" placeholder="Artist-ID (Zahl)" required
			       class="w-full rounded-md p-2" />
			<input name="artist_name" placeholder="Artist-Name" required
			       class="w-full rounded-md p-2" />
			<input name="genre"       placeholder="Genre (optional)"
			       class="w-full rounded-md p-2" />
			<input name="photo"       placeholder="Foto-Datei (optional)"
			       class="w-full rounded-md p-2" />

			<button class="rounded-md bg-black px-4 py-2 text-white hover:opacity-80">
				Erstellen
			</button>

			{#if form?.missing && form?.source === 'create'}
				<p class="text-sm text-red-500">ID und Name sind Pflicht.</p>
			{/if}
			{#if form?.duplicate}
				<p class="text-sm text-red-500">Diese ID existiert bereits.</p>
			{/if}
		</form>

		<form method="POST" action="?/update"
		      class="grid w-full md:w-1/2 gap-4 rounded-xl bg-[#202020] p-6 text-gray-300">
			<h2 class="text-xl font-semibold">Bestehenden Artist updaten</h2>

			<select name="id" required class="w-full rounded-md p-2">
				<option value="" disabled selected hidden>Artist auswählen …</option>
				{#each artists as a}
					<option value={a._id}>{a.artist_name} — ID {a._id}</option>
				{/each}
			</select>

			<input name="artist_name" placeholder="Neuer Name"
			       class="w-full rounded-md p-2" />

			<input name="genre" placeholder="Neues Genre"
			       class="w-full rounded-md p-2" />

			<input name="photo" placeholder="Neues Foto"
			       class="w-full rounded-md p-2" />

			<button class="rounded-md bg-black px-4 py-2 text-white hover:bg-amber-600">
				Updaten
			</button>

			{#if form?.missing && form?.source === 'update'}
				<p class="text-sm text-red-500">Artist auswählen.</p>
			{/if}
			{#if form?.nothingToUpdate}
				<p class="text-sm text-red-500">Keine Änderungen eingetragen.</p>
			{/if}
			{#if form?.success}
				<p class="text-sm text-green-400">Artist gespeichert.</p>
			{/if}
		</form>
	</div>
</div>
