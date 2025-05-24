<script lang="ts">
	const { artists } = $props<{ artists: Array<{
		name: string;
		popularity: number;

		images: { url: string }[];
	}> }>();
</script>

<div class="text-white mt-4 bg-[#202020] p-4 rounded-xl lg:flex lg:flex-col hidden">
	<h2 class="text-2xl mb-4">Top 3 House-Artists</h2>
	<ul class="md:flex md:flex-col  gap-4">
		{#each artists as artist, i}
			<li class="flex flex-row gap-6 items-end">
				<img src={artist.images[0]?.url} alt={artist.name} width="100" class="rounded-xl"/>
				<div class="flex flex-row gap-4 items-end">
					<p>#{i + 1}</p>
					<p class="text-4xl">
						{artist.name}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</div>
