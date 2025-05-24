<script lang="ts">
	import { page } from '$app/state';
	const songs = $derived(page.data.songs ?? []);
</script>

<div
	class="
    fixed top-16 right-0 bottom-0 left-[calc(25%+8px)] m-2 overflow-hidden rounded-xl bg-[#121212] px-4 text-white sm:px-6 md:px-8"
>
	<div class="scrollbar-hide mt-6 h-full overflow-y-auto pr-2 md:mt-8">
		<div class="mb-8 md:mb-10">
			<div class="mb-3 flex items-center justify-between md:mb-4">
				<h2 class="text-xl font-bold md:text-2xl">Trending Songs</h2>
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
	</div>
</div>
