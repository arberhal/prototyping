<script lang="ts">
  import { page } from '$app/state';
  const artists = $derived(page.data.artists ?? []);
</script>

<div
  class="
    fixed top-16 bottom-0 right-0 left-[calc(25%+8px)] m-2 rounded-xl bg-black px-4 sm:px-6 md:px-8 text-white overflow-hidden">
  <div class="h-full overflow-y-auto mt-6 md:mt-8 pr-2 scrollbar-hide">
    <div class="mb-8 md:mb-10">
      <div class="mb-3 md:mb-4 flex items-center justify-between">
        <h2 class="text-xl md:text-2xl font-bold">Popular Artists</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 pb-4">
        {#each artists as artist (artist._id)}
          <div class="w-full text-center">
            <div class="mx-auto mb-2 aspect-square w-full max-w-[160px] overflow-hidden rounded-full">
              <img
                src={'/images/' + artist.photo}
                alt={artist.artist_name}
                class="h-full w-full object-cover"
              />
            </div>
            <h4 class="truncate text-sm font-medium">{artist.artist_name}</h4>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
