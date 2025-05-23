<script lang="ts">

	const { data } = $props();
	const { artist } = data;
</script>

<div
  class="
    fixed top-16 bottom-0 right-0 left-[calc(25%+8px)] m-2 rounded-xl  bg-black px-4 sm:px-6 md:px-8 text-white overflow-hidden">
  <div class="mt-6 md:mt-8 pr-2 flex gap-8">
    <div class="aspect-square w-full max-w-[500px] overflow-hidden rounded-xl">
              <img
                src={'/images/' + artist.photo}
                alt={artist.artist_name}
                class="h-full w-full object-cover"
              />
            </div>
            <div class="flex flex-col gap-2">
                <h2 class="text-6xl ">{artist.artist_name}</h2>
                <p class="text-gray-300">{artist.genre}</p>
            </div>
  </div>
  
</div>
