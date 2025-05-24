<script lang="ts">
	import { page } from '$app/state';
	const songs = $derived(page.data.songs ?? []);
	const artists = $derived(page.data.artists ?? []);
</script>

<div
	class="
    fixed top-16 right-0 bottom-0 left-[calc(25%+8px)] m-2 overflow-hidden rounded-xl bg-[#121212] px-4 text-white sm:px-6 md:px-8"
>
	<div class="scrollbar-hide mt-6 h-full overflow-y-auto pr-2 md:mt-8">
		<div class="mb-8 md:mb-10">
			<div class="mb-3 flex items-center justify-between md:mb-4">
				<h2 class="text-xl font-bold md:text-2xl">Trending Songs</h2>
				<a href="/songs" class="text-xs text-gray-400 transition-colors hover:text-white md:text-sm"
					>Show all</a
				>
			</div>
			<div
				class="grid grid-cols-2 gap-3 pb-4 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 xl:grid-cols-6"
			>
				{#each songs as song (song._id)}
					<div class="w-full">
						<div class="mb-2 aspect-square overflow-hidden rounded-md">
							<img
								src={'/images/' + song.photo}
								alt={'Cover von ' + song.song_name}
								class="h-full w-full object-cover"
							/>
						</div>
						<h4 class="truncate text-sm font-medium">{song.song_name}</h4>
						<p class="truncate text-xs text-gray-400">{song.artist_name}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="mb-3 flex items-center justify-between md:mb-4">
			<h2 class="text-xl font-bold md:text-2xl">Trending Songs</h2>
			<a href="/artists" class="text-xs text-gray-400 md:text-sm">Show all</a>
		</div>

		<div
			class="mb-10 grid grid-cols-2 gap-3 pb-4 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 xl:grid-cols-6"
		>
			{#each artists as artist (artist._id)}
				<a href={`/artists/${artist._id}`} class="group block w-full text-center">
					<div class="mx-auto mb-2 aspect-square w-full max-w-[160px] overflow-hidden rounded-full">
						<img
							src={'/images/' + artist.photo}
							alt={artist.artist_name}
							class="h-full w-full object-cover"
						/>
					</div>

					<h4 class="truncate text-sm font-medium">{artist.artist_name}</h4>
				</a>
			{/each}
		</div>
	</div>
</div>
